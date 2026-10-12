//スプレッドシートの情報を読み込み、データを整形する関数
import { onMounted, readonly, ref } from "vue";
import Papa from "papaparse";

const spreadsheetBaseUrl =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vSKm4J4VsrH045MzgiJVSxGgIpqJlsAAF6edMHBNKr5pJhvGd9WBjQYo6m1E_wSRusIn8afAhINFo4x/pub";

    //スプレッドシートの各ページのurlを定義
const spreadsheetUrls = {
	commonMain: `${spreadsheetBaseUrl}?gid=0&single=true&output=csv`,
	sns: `${spreadsheetBaseUrl}?gid=446940714&single=true&output=csv`,
	sidemenu: `${spreadsheetBaseUrl}?gid=436872074&single=true&output=csv`,
    home: `${spreadsheetBaseUrl}?gid=794075216&single=true&output=csv`,
    activity: `${spreadsheetBaseUrl}?gid=1361925498&single=true&output=csv`,
    faq: `${spreadsheetBaseUrl}?gid=329200883&single=true&output=csv`,
    faq_qanda: `${spreadsheetBaseUrl}?gid=1041162013&single=true&output=csv`,
    about_potato: `${spreadsheetBaseUrl}?gid=692555755&single=true&output=csv`,
    line: `${spreadsheetBaseUrl}?gid=880073552&single=true&output=csv`,
	line_stamp: `${spreadsheetBaseUrl}?gid=193264437&single=true&output=csv`,
};

//それぞれのスプレッドシートの行の型を定義
export interface SpreadsheetRow {
	key: string;
	[column: string]: string;
}

export interface CommonMainRow extends SpreadsheetRow {
	label: string;
	note: string;
}

export interface SnsRow extends SpreadsheetRow {
	label: string;
	url: string;
	img_url: string;
	note: string;
}

export interface SidemenuRow extends SpreadsheetRow {
	label: string;
	path: string;
	img_url: string;
	backgroundColor: string;
	size: string;
	note: string;
}

export interface HomeRow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
    note: string;
}

export interface ActivityRow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
	img_url: string;
    note: string;
}

export interface FaqRow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
    note: string;
}

export interface FaqQAndARow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
    note: string;
}

export interface AboutPotatoRow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
    note: string;
}

export interface LineRow extends SpreadsheetRow {
	title: string;
	subtitle: string;
	content: string;
    note: string;
}

export interface LineStampRow extends SpreadsheetRow {
	label: string;
	url: string;
	img_url: string;
	note: string;
}

export type SpreadsheetSheet<Row extends SpreadsheetRow> = Record<string, Row>;

const spreadsheetCommonMain = ref<SpreadsheetSheet<CommonMainRow>>({});
const spreadsheetCommonSNS = ref<SpreadsheetSheet<SnsRow>>({});
const spreadsheetCommonSidemenu = ref<SpreadsheetSheet<SidemenuRow>>({});
const spreadsheetHome = ref<SpreadsheetSheet<HomeRow>>({});
const spreadsheetActivity = ref<SpreadsheetSheet<ActivityRow>>({});
const spreadsheetFaq = ref<SpreadsheetSheet<FaqRow>>({});
const spreadsheetFaqQAndA = ref<SpreadsheetSheet<FaqQAndARow>>({});
const spreadsheetAboutPotato = ref<SpreadsheetSheet<AboutPotatoRow>>({});
const spreadsheetLine = ref<SpreadsheetSheet<LineRow>>({});
const spreadsheetLineStamp = ref<SpreadsheetSheet<LineStampRow>>({});
const loading = ref(false);
const error = ref<string | null>(null);
let loadPromise: Promise<void> | undefined;

export function convertCsvToSpreadsheetData<Row extends SpreadsheetRow = SpreadsheetRow>(
	csvText: string,
): SpreadsheetSheet<Row> {
	const rows = Papa.parse<SpreadsheetRow>(csvText, {
		header: true,
		skipEmptyLines: "greedy",
		transform: (value) => value.trim().replace(/\\n/g, "\n"),
	}).data;
	const result: SpreadsheetSheet<Row> = {};

	for (const row of rows) {
		const key = row.key?.trim();
		if (key) {
			result[key] = { ...row, key } as Row;
		}
	}

	return result;
}

function loadSpreadsheet(): Promise<void> {
	if (!loadPromise) {
		loading.value = true;
		error.value = null;
		const fetchSheet = async <Row extends SpreadsheetRow>(url: string) => {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Spreadsheet request failed: ${response.status}`);
			}
			return convertCsvToSpreadsheetData<Row>(await response.text());
		};

		loadPromise = Promise.all([
			fetchSheet<CommonMainRow>(spreadsheetUrls.commonMain),
			fetchSheet<SnsRow>(spreadsheetUrls.sns),
			fetchSheet<SidemenuRow>(spreadsheetUrls.sidemenu),
			fetchSheet<HomeRow>(spreadsheetUrls.home),
			fetchSheet<ActivityRow>(spreadsheetUrls.activity),
			fetchSheet<FaqRow>(spreadsheetUrls.faq),
			fetchSheet<FaqQAndARow>(spreadsheetUrls.faq_qanda),
			fetchSheet<AboutPotatoRow>(spreadsheetUrls.about_potato),
			fetchSheet<LineRow>(spreadsheetUrls.line),
			fetchSheet<LineStampRow>(spreadsheetUrls.line_stamp),
		])
			.then(
				([
					commonMain,
					sns,
					sidemenu,
					home,
					activity,
					faq,
					faqQAndA,
					aboutPotato,
					line,
					lineStamp,
				]) => {
				spreadsheetCommonMain.value = commonMain;
				spreadsheetCommonSNS.value = sns;
				spreadsheetCommonSidemenu.value = sidemenu;
				spreadsheetHome.value = home;
				spreadsheetActivity.value = activity;
				spreadsheetFaq.value = faq;
				spreadsheetFaqQAndA.value = faqQAndA;
				spreadsheetAboutPotato.value = aboutPotato;
				spreadsheetLine.value = line;
				spreadsheetLineStamp.value = lineStamp;
				},
			)
			.catch((cause: unknown) => {
				error.value = cause instanceof Error ? cause.message : String(cause);
				loadPromise = undefined;
				console.error("Failed to load spreadsheet data", cause);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	return loadPromise;
}

export function useSpreadsheet() {
	onMounted(() => {
		void loadSpreadsheet();
	});

	return {
		spreadsheetCommonMain: readonly(spreadsheetCommonMain),
		spreadsheetCommonSNS: readonly(spreadsheetCommonSNS),
		spreadsheetCommonSidemenu: readonly(spreadsheetCommonSidemenu),
        spreadsheetHome: readonly(spreadsheetHome),
        spreadsheetActivity: readonly(spreadsheetActivity),
        spreadsheetFaq: readonly(spreadsheetFaq),
        spreadsheetFaqQAndA: readonly(spreadsheetFaqQAndA),
        spreadsheetAboutPotato: readonly(spreadsheetAboutPotato),
        spreadsheetLine: readonly(spreadsheetLine),
		spreadsheetLineStamp: readonly(spreadsheetLineStamp),
		loading: readonly(loading),
		error: readonly(error),
	};
}
