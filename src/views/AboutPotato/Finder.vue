<script setup lang="ts">
import { computed, ref } from "vue";
import FinderQuestion from "../../components/FinderQuestion.vue";
import FinderAnswer from "../../components/FinderAnswer.vue";

const questions: {
  // ここに必要なpropsの型を定義
  id: number;
  question: string;
  options: {
    label: string;
    fontColor?: string;
    backgroundColor?: string;
    to: number;
  }[];
}[] = [
  {
    id: 1,
    question: "焼き芋で好きなのは？",
    options: [
      {
        label: "ねっとり系",
        fontColor: "white",
        backgroundColor: "purple",
        to: 2,
      },
      { label: "ホクホク系", to: 3 },
    ],
  },
  {
    id: 2,
    question: "好きな色は？",
    options: [
      {
        label: "王道の黄色",
        fontColor: "white",
        backgroundColor: "purple",
        to: 4,
      },
      { label: "紫やオレンジ", to: 5 },
    ],
  },
  {
    id: 3,
    question: "さつまいもを食べるときは？",
    options: [
      {
        label: "焼き芋！",
        fontColor: "white",
        backgroundColor: "purple",
        to: 6,
      },
      { label: "料理に！", to: 100 },
    ],
  },
  {
    id: 4,
    question: "どっちが大事？",
    options: [
      { label: "甘さ", fontColor: "white", backgroundColor: "purple", to: 7 },
      { label: "舌触り", to: 8 },
    ],
  },
  {
    id: 5,
    question: "究極の二択！",
    options: [
      { label: "紫色", fontColor: "white", backgroundColor: "purple", to: 101 },
      { label: "オレンジ色", to: 102 },
    ],
  },
  {
    id: 6,
    question: "ホクホクの中でも...",
    options: [
      {
        label: "昔ながらのホクホク感",
        fontColor: "white",
        backgroundColor: "purple",
        to: 103,
      },
      { label: "栗のような新感覚", to: 104 },
    ],
  },
  {
    id: 7,
    question: "食べる時期は？",
    options: [
      {
        label: "掘り立てを秋に",
        fontColor: "white",
        backgroundColor: "purple",
        to: 105,
      },
      { label: "熟成して冬に", to: 9 },
    ],
  },
  {
    id: 8,
    question: "食べ方を細かく！",
    options: [
      {
        label: "圧倒的な滑らかさ、上品な甘さ",
        fontColor: "white",
        backgroundColor: "purple",
        to: 106,
      },
      { label: "しっとりした食感、小ぶりな食べきりサイズ", to: 107 },
      { label: "しっとりした食感、冷やしても美味しい！", to: 108 },
    ],
  },
  {
    id: 9,
    question: "甘さのこだわりも...",
    options: [
      {
        label: "すっきりした甘さ",
        fontColor: "white",
        backgroundColor: "purple",
        to: 109,
      },
      { label: "濃厚な甘さと強いねっとり感", to: 110 },
    ],
  },
];

const answers: {
  // ここに必要なpropsの型を定義
  id: number;
  title: string;
  characters: string[];
}[] = [
  {
    id: 100,
    title: "コガネセンガン",
    characters: ["焼酎に使われるおいも"],
  },
  {
    id: 101,
    title: "ふくむらさき",
    characters: ["断面が紫色のおいも"],
  },
  {
    id: 102,
    title: "ハロウィンスイート",
    characters: ["オレンジ色のおいも"],
  },
  {
    id: 103,
    title: "金時",
    characters: ["鳴門金時、五郎島金時など"],
  },
  {
    id: 104,
    title: "くりかぐや",
    characters: ["まるで栗のようなおいも"],
  },
  {
    id: 105,
    title: "あまはづき",
    characters: ["収穫してすぐに甘い！"],
  },
  {
    id: 106,
    title: "シルクスイート",
    characters: ["なめらかさNo.1！"],
  },
  {
    id: 107,
    title: "ひめあやか",
    characters: ["かわいらしいサイズ"],
  },
  {
    id: 108,
    title: "きみまろこ",
    characters: ["冷やし焼き芋に！"],
  },
  {
    id: 109,
    title: "べにはるか",
    characters: ["王道の安定感！"],
  },
  {
    id: 110,
    title: "安納芋",
    characters: ["濃厚な甘さとねっとり感！"],
  },
];

//0はスタート前、1以上は上の設問のid、100以上は結果のidに一致
const status = ref(0);

const finderStart = () => {
  status.value = 1;
};

const finderReset = () => {
  status.value = 0;
};

const nextQuestion = (to: number) => {
  status.value = to;
};

const currentQuestion = computed(() =>
  questions.find((question) => question.id === status.value),
);

const currentAnswer = computed(() =>
  answers.find((answer) => answer.id === status.value),
);

const visible = ref(true);
const isFading = ref(false);

const hide = () => {
  isFading.value = true;
};
</script>

<template>
  <section>
    <div
      class="screen"
      :class="{ hide: isFading }"
      @animationend="visible = false"
      v-show="status === 0"
    >
      <div class="title-wrapper">
        <div class="pre-title">あなたにぴったりの</div>
        <img class="title" src="../../assets/images/finder-title.png" />
      </div>
      <button class="finder-start" @click="finderStart">スタート</button>
    </div>
    <Transition name="finder-question" mode="out-in">
      <FinderQuestion
        v-if="currentQuestion"
        :key="currentQuestion.id"
        :id="currentQuestion.id"
        :question="currentQuestion.question"
        :options="currentQuestion.options"
        @nextQuestion="nextQuestion"
      />
    </Transition>
    <Transition name="finder-answer" mode="out-in" style="width: 100%; align-items: center; display: flex; justify-content: center; flex-direction: column;">
      <div>
      <FinderAnswer
        v-if="currentAnswer"
        :key="currentAnswer.id"
        :id="currentAnswer.id"
        :title="currentAnswer.title"
        :characters="currentAnswer.characters"
      />
      <button class="finder-start" @click="finderReset" v-show="status >= 100">もう1回！</button></div>
    </Transition>
  </section>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "dot"; /*任意のフォントファミリー名でOK*/
  src: url("../../assets/fonts/BestTen-DOT.otf"); /*fontがあるパスを書いて、formatを指定*/
  font-display: swap; /*ダウンロード状況に応じてフォントの表示を変える */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}

.finder-question-enter-active {
  animation: fadeInUp 0.8s ease-out forwards;
}

.finder-question-leave-active {
  animation: fadeOutUp 0.8s ease-out forwards;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.screen {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: fadeInUp 0.8s ease-out forwards;
}

.title-wrapper {
  position: relative;
}

.pre-title {
  position: absolute;
  z-index: 2;
  font-family:
    "游明朝", YuMincho, "Hiragino Mincho ProN", "ヒラギノ明朝 ProN W3", serif;
}

.title {
  display: block;
  z-index: 1;
}

.finder-start {
  appearance: none;
  background-color: #f4de6a;
  border: 1px solid #4b1b22;
  box-shadow: 0 6px 0px rgba(75, 27, 34, 1);
  font-size: 1.5rem;
  border-radius: 2rem;
  font-family: "dot", "MS Mincho", serif;
  padding: 2rem;
  transition: ease 0.3s;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.hide {
  animation: fadeOutUp 0.8s ease-out forwards;
}

@media screen and (max-width: 720px) {
  .screen {
  height: 80vh;
}
  .pre-title {
  top: 20px;
  left: 0;
  font-size: 20px;
}
.title-wrapper {
  position: relative;
  width: 80vw;
}
.title {
  width: 80vw;
}
.finder-start {
  width: 80%;
}
}
@media screen and (min-width: 721px) {
  .screen {
  height: 60vh;
}
  .pre-title {
  top: 20px;
  left: 0;
  font-size: 30px;
}
.title-wrapper {
  position: relative;
  width: fit-content;
}
.title {
  height: 60vh;
}
.finder-start {
  width: 50%;
}
}
</style>
