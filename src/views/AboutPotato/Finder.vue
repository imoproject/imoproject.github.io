<script setup lang="ts">
import { ref } from "vue";
import FinderQuestion from "../../components/FinderQuestion.vue";

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
    question: "さつまいもを食べたことはありますか？",
    options: [
      { label: "ある！", fontColor: "white", backgroundColor: "purple", to: 2 },
      { label: "ない", to: 3 },
    ],
  },
];

//0はスタート前、1以上は上の設問のidに一致
const status = ref(0);

const finderStart = () => {
  status.value = 1;
};

const nextQuestion = (to: number) => {
  status.value = to;
};
</script>

<template>
  <section>
    <div class="screen" :class="{ hide: status !== 0 }">
      <div class="title-wrapper">
        <div class="pre-title">あなたにぴったりの</div>
        <img class="title" src="../../assets/images/finder-title.png" />
      </div>
      <button class="finder-start" @click="finderStart">スタート</button>
    </div>
    <div class="screen">
      <FinderQuestion
        v-for="(item, index) in questions"
        :key="item.id"
        :question="item.question"
        :options="item.options"
        :class="{ hide: status !== item.id }"
        @nextQuestion="nextQuestion"
      />
    </div>
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

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.screen {
  position: absolute;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: fadeInUp 0.8s ease-out forwards;
}

.title-wrapper {
  position: relative;
  width: fit-content;
}

.pre-title {
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 2;
  font-size: 30px;
  font-family:
    "游明朝", YuMincho, "Hiragino Mincho ProN", "ヒラギノ明朝 ProN W3", serif;
}

.title {
  display: block;
  height: 60vh;
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
  width: 30%;
  padding: 2rem;
  transition: ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.hide {
  animation: fadeOutUp 0.8s ease-out forwards;
}
</style>
