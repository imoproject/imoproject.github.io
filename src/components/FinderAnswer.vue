<template>
  <div
    class="finder-answer"
    :style="{
      backgroundColor: props.backgroundColor || 'darkred',
      color: props.color || 'white',
    }"
  >
    <div class="pre-title">あなたにぴったりの芋は...</div>
    <div
      class="question"
      :style="{
        color: props.color || 'white',
      }"
    >
      {{ props.title }}
    </div>
    <div class="options-wrapper">
      <div v-for="(item, index) in characters" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "dot"; /*任意のフォントファミリー名でOK*/
  src: url("../assets/fonts/BestTen-DOT.otf"); /*fontがあるパスを書いて、formatを指定*/
  font-display: swap; /*ダウンロード状況に応じてフォントの表示を変える */
}
.finder-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
}

.question {
  font-family: "dot";
  color: #4b1b22;
  padding: 1rem;
  font-weight: 100;
}
.options-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

@media screen and (max-width: 720px) {
.finder-answer {
  height: 50vh;
  width: 70vw;
}
.question {
  font-size: 1.5rem;
}
}
@media screen and (min-width: 721px) {
 .finder-answer {
  height: 50vh;
    width: 50vw;
}
.question {
  font-size: 3rem;
}
}
</style>
<script setup lang="ts">
import FinderQuestionOption from "../components/FinderQuestionOption.vue";

const props = defineProps<{
  // ここに必要なpropsの型を定義
  id: number;
  title: string;
  characters: string[];
  color?: string;
  backgroundColor?: string;
}>();

const emit = defineEmits<{
  nextQuestion: [number];
}>();

const nextQuestion = (to: number) => {
  emit("nextQuestion", to);
};
</script>
