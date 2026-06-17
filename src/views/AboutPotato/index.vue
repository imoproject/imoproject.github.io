<script setup lang="ts">
import GamemenuItem from "../../components/GamemenuItem.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const gameMenu: {
  // ここに必要なpropsの型を定義
  label: string;
  link: string;
  backgroundColor?: string;
  size?: string;
  disable?: boolean;
}[] = [
  { label: "あなたにおすすめの\nお芋診断", link: "/finder" },
  { label: "整備中", link: "/test", disable: true, backgroundColor: "gray" },
  { label: "整備中", link: "/test", disable: true, backgroundColor: "gray" },
];

const router = useRouter();
const isStarting = ref(false);

const startGame = async (link: string) => {
  isStarting.value = true;

  setTimeout(() => {
    router.push(link);
  }, 800);
};
</script>

<template>
  <section :class="{ fadeout: isStarting }">
    <h1>About Potato</h1>
    <h2>芋について<br />もっと知りたい方へ</h2>
    <p>まだまだ整備中ですが良かったら遊んでいってね！</p>
    <div style="display: flex; flex-direction: column; align-items: center">
      <div class="whole-wrapper" :class="{ zoomout: isStarting }">
        <div class="game left">
          <div class="button border"></div>
          <div class="button stripe"></div>
        </div>
        <div class="game center">
          <div class="screen">
            <GamemenuItem
              v-for="(item, index) in gameMenu"
              :key="item.label"
              :label="item.label"
              :link="item.link"
              :backgroundColor="item.backgroundColor"
              :size="item.size"
              :disable="item.disable"
              @start="startGame(item.link)"
            />
          </div>
        </div>
        <div class="game right">
          <div class="button2-wrapper">
            <div class="button2"></div>
            <div class="button2"></div>
            <div class="button2"></div>
            <div class="button2"></div>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/images/game.png" class="game-img" />
  </section>
</template>

<style scoped lang="scss">
.whole-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  width: 100%;
  min-width: 1235px;

  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}

.whole-wrapper.zoomout {
  transform: scale(3);
  opacity: 0;
}

.game {
  height: 60vh;
  background-color: #ad1a45;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.right {
  width: 20%;
  border-radius: 0 20vh 20vh 0;
  border-color: black black black transparent;
  position: relative;
}
.left {
  width: 20%;
  border-radius: 20vh 0 0 20vh;
  border-color: black transparent black black;
  position: relative;
}
.center {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: black transparent black transparent;
}
.screen {
  width: 120%;
  height: 85%;
  background-color: aliceblue;
  border: 10px solid gray;
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.button {
  background-color: gray;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.border {
  width: 150px;
  height: 50px;
}
.stripe {
  width: 50px;
  height: 150px;
}
.button2 {
  background-color: gray;
  border-radius: 50%;
  width: 70px;
  height: 70px;
}
.button2-wrapper {
  width: 170px;
  height: 170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.game-img {
  width: 250px;
  position: fixed;
  bottom: -10px;
  right: 5vw;
}

section {
  transition: ease 0.3s;
}

section.fadeout {
  opacity: 0;
  transition: ease 0.3s;
}

@media (max-width: 768px) {
  .whole-wrapper {
    transform: scale(0.3);
    transform-origin: top center;
    margin-top: 0;
  }
}
</style>
