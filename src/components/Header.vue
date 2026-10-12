<template>
  <div class="header-wrapper horizonal">
    <router-link to="/" class="horizonal" id="home">
      <img :src="logoUrl" class="imologo" />
      <div class="title">{{ orgName }}</div>
    </router-link>
    <div class="horizonal">
      <div class="horizonal snss">
        <div v-for="(sns, name) in SNSs" :key="name" class="horizonal">
          <a :href="sns.url" target="_blank" class="horizonal snscontainer">
            <img :src="sns.img_url" class="snslogo" />
          </a>
        </div>
      </div>

      <div
        class="btn-trigger"
        id="btn01"
        :class="{ active: open }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/css/breakpoints" as *;

/* =========================
   Header全体
========================= */
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;

  justify-content: space-between;

  background-color: #fffafa;

  border-style: solid;
  border-color: #ad1a45;

  z-index: 10;

  @include pc {
    height: 10vh;
    border-width: 5px 0;
  }

  @include sp {
    height: 10vh;
    border-width: 5px 0;
  }
}

/* =========================
   Logo
========================= */
.title {
  font-family: "irohamaru", sans-serif;
  font-weight: bold;
  color: #ad1a45;
  @include pc {
    font-size: 24px;
  }

  @include sp {
    font-size: 20px;
  }
}

.imologo {
  @include pc {
    width: 40px;
    margin-right: 10px;
  }

  @include sp {
    width: 30px;
    margin-right: 10px;
  }
}

/* =========================
   SNS
========================= */
.snss {
  margin-right: 20px;
}

.snscontainer:hover {
  cursor: pointer;
}

.snslogo {
  @include pc {
    width: 40px;
    margin: 0 5px;
  }

  @include sp {
    width: 30px;
    margin: 0 5px;
  }
}

/* =========================
   toggle
========================= */
@media screen and (min-width: 721px) {
  .btn-trigger {
    display: none !important;
  }
}

/*ここからハンバーガーメニュー*/
.btn-trigger {
  position: relative;
  width: 40px;
  height: 30px;
  cursor: pointer;
}
.btn-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ad1a45;
  border-radius: 4px;
}
.btn-trigger,
.btn-trigger span {
  display: inline-block;
  transition: all 0.5s;
  box-sizing: border-box;
}
.btn-trigger span:nth-of-type(1) {
  top: 0;
}
.btn-trigger span:nth-of-type(2) {
  top: 13px;
}
.btn-trigger span:nth-of-type(3) {
  bottom: 0;
}
#btn01.active span:nth-of-type(1) {
  -webkit-transform: translateY(13px) rotate(-45deg);
  transform: translateY(13px) rotate(-45deg);
}
#btn01.active span:nth-of-type(2) {
  opacity: 0;
}
#btn01.active span:nth-of-type(3) {
  -webkit-transform: translateY(-13px) rotate(45deg);
  transform: translateY(-13px) rotate(45deg);
}
</style>

<script setup lang="ts">
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetCommonMain } = useSpreadsheet();
const { spreadsheetCommonSNS } = useSpreadsheet();
const orgName = computed(
  () => spreadsheetCommonMain.value.orgname?.label || "IMOPROJECT",
);
const logoUrl = computed(
  () =>
    spreadsheetCommonMain.value.logo_url?.label ||
    "../assets/images/imologo.png",
);
const SNSs = computed(() => spreadsheetCommonSNS.value || []);

const instagramLogoUrl = computed(
  () =>
    spreadsheetCommonSNS.value.instagram?.img_url ||
    "../assets/images/instagram-logo.png",
);
const XLogoUrl = computed(
  () => spreadsheetCommonSNS.value.X?.img_url || "../assets/images/x-logo.png",
);

const toggleMenu = () => {
  emit("toggleMenu");
};

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  toggleMenu: [];
}>();
</script>
