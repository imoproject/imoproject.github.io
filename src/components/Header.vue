<template>
  <div class="header-wrapper">
    <router-link to="/" class="logo-container" id="home">
      <img src="../assets/images/imologo.png" class="imologo" />
      <div class="title">IMOPROJECT</div>
    </router-link>
    <div class="sns-wrapper-pc">
      公式SNS
      <div class="horizonal">
        <a
          href="https://www.instagram.com/imoproject.ut/"
          target="_blank"
          class="sns-container"
        >
          <img src="../assets/images/instagram.svg" class="sns-logo" />
          <div class="arrow">
            Instagram
            <div class="arrow-right"></div>
          </div>
        </a>
        <a
          href="https://x.com/imoproject_ut"
          target="_blank"
          class="sns-container"
        >
          <img src="../assets/images/X.png" class="sns-logo" />
          <div class="arrow">
            X
            <div class="arrow-right"></div>
          </div>
        </a>
      </div>
    </div>
    <div class="sns-wrapper-sp">
      <a
        href="https://www.instagram.com/imoproject.ut/"
        target="_blank"
        class="sns-container"
        ><img src="../assets/images/instagram.svg" class="sns-logo"
      /></a>
      <a
        href="https://x.com/imoproject_ut"
        target="_blank"
        class="sns-container"
        ><img src="../assets/images/X.png" class="sns-logo"
      /></a>

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

<style scoped>
/* =========================
   Header
========================= */
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  background-color: #fffafa;

  border-style: solid;
  border-color: #ad1a45;

  z-index: 10;
}

/* =========================
   Logo
========================= */
.logo-container {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.imologo {
  width: 40px;
  margin-right: 10px;
}

.title {
  font-family: "irohamaru", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #ad1a45;
}

/* =========================
   SNS
========================= */
.sns-container {
  display: flex;
  align-items: center;
}

.sns-container:hover {
  cursor: pointer;
}

.sns-logo {
  width: 30px;
  margin-right: 10px;
}

.horizonal {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 250px;
  margin-top: 5px;
}

.arrow {
  display: flex;
  align-items: center;

  color: black;
}

.arrow-right {
  width: 0;
  height: 0;

  margin-left: 10px;

  border-style: solid;
  border-width: 8px;
  border-color: transparent transparent transparent black;
}

/* =========================
   Link
========================= */
a {
  text-decoration: none;
}

/* =========================
   Mobile
========================= */
@media screen and (max-width: 720px) {
  .header-wrapper {
    padding: 12px 18px;
    border-width: 5px 0;
    height: 70px;
    width: 100vw;
  }

  .logo-container {
    font-size: 15px;
  }

  .imologo {
    width: 30px;
    margin-right: 7px;
  }

  .sns-wrapper-pc {
    display: none;
  }

  .sns-wrapper-sp {
    display: flex;
    align-items: center;
  }
}

/* =========================
   Desktop
========================= */
@media screen and (min-width: 721px) {
  .header-wrapper {
    border-width: 10px 0;
    padding: 20px 40px;
    height: 110px;
  }

  .sns-wrapper-pc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 250px;
    height: 50px;
  }

  .sns-wrapper-sp {
    display: none;
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
