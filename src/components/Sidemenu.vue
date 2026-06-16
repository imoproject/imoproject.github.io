<script setup lang="ts">
import SidemenuChild from "./SidemenuChild.vue";
import logo from "../assets/images/imologo2.svg";
import imo1 from "../assets/images/imo1.png";
import imo2 from "../assets/images/imo2.png";
import lineStamp from "../assets/images/line-stamp.png";

const menuItems: {
  label: string;
  link: string;
  icon: string;
  backgroundColor?: string;
  size?: number;
}[] = [
  {
    label: "HOME",
    link: "/",
    icon: logo,
    backgroundColor: "#ad1a45",
    size: 80,
  },
  {
    label: "活動内容",
    link: "/activity",
    icon: imo1,
  },
  {
    label: "よくあるご質問\n入会希望の方へ",
    link: "/faq",
    icon: imo2,
  },
  {
    label: "芋について\nもっと知りたい方へ",
    link: "/about-potato",
    icon: imo1,
  },
  {
    label: "LINEスタンプ",
    link: "/line-stamp",
    icon: lineStamp,
    backgroundColor: "#f6d893",
  },
];

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

<template>
  <div class="menu-wrapper" :class="{ show: open }">
    <div class="menu-upper">
      <div class="MENU">
        <span class="num1">M</span><span class="num2">E</span
        ><span class="num3">N</span><span class="num4">U</span>
      </div>
      <div class="menu-detail">
        地中に眠る可能性をいま、<br />
        掘り起こす。<br />
        ホクホクな最新情報は<br />
        こちらから！！ <br />今日もお芋を愛でています。
      </div>
    </div>
    <div class="menu-lower">
      <SidemenuChild
        v-for="(item, index) in menuItems"
        :key="item.label"
        :label="item.label"
        :link="item.link"
        :icon="item.icon"
        :backgroundColor="item.backgroundColor"
        :size="item.size"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<style>
/* 上部MENUの文字部分*/
.MENU {
  background-color: #ad1a45;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
}
.MENU span {
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffafa;
  width: 20px;
  left: 110px;
  top: 0;
  transform-origin: bottom center;
}
.num1 {
  transform: rotate(-9deg) translateX(-10px) translateY(-19px);
}
.num2 {
  transform: rotate(-5deg) translateX(-2px) translateY(-19px);
}
.num3 {
  transform: rotate(5deg) translateX(0px) translateY(-19px);
}
.num4 {
  transform: rotate(12deg) translateX(3px) translateY(-17px);
}
/*サブタイトル部分*/
.menu-detail {
  color: #75464c;
  background-color: #c48696;
  padding: 10px;
  width: calc(100% - 20px);
  border-radius: 0 0 14px 14px;
  text-align: center;
}
/*上部まとめ*/
.menu-upper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}
/*下部まとめ*/
.menu-lower {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;
}
/*全体*/
.menu-wrapper {
  width: 300px;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 110px;
}
.hamburger-menu {
  display: none;
}
@media screen and (max-width: 720px) {
  .menu-wrapper {
    transform: translateX(-100%);
    position: fixed;
    top: 70px;
  }
  .menu-wrapper.show {
    transform: translateX(0);
    background-color: rgba(246, 242, 231, 0.7);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 70px;
  }
}
</style>
