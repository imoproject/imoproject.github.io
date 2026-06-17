<script setup lang="ts"></script>

<template>
  <div class="menu-wrapper">あああ</div>
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
