<template>
  <div class="finder-question">
    <div class="question">{{ props.question }}</div>
    <div class="options-wrapper">
      <FinderQuestionOption
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :fontColor="item.fontColor"
        :backgroundColor="item.backgroundColor"
        :to="item.to"
        @nextQuestion="nextQuestion"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "dot"; /*任意のフォントファミリー名でOK*/
  src: url("../assets/fonts/BestTen-DOT.otf"); /*fontがあるパスを書いて、formatを指定*/
  font-display: swap; /*ダウンロード状況に応じてフォントの表示を変える */
}
.finder-question {
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-around;
}

.question {
  font-family: "dot";
  color: #4b1b22;
  padding: 1rem;
  font-size: 3rem;
  font-weight: 100;
}
.options-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>
<script setup lang="ts">
import FinderQuestionOption from "../components/FinderQuestionOption.vue";

const props = defineProps<{
  // ここに必要なpropsの型を定義
  id: number;
  question: string;
  options: {
    label: string;
    fontColor?: string;
    backgroundColor?: string;
    to: number;
  }[];
}>();

const emit = defineEmits<{
  nextQuestion: [number];
}>();

const nextQuestion = (to: number) => {
  emit("nextQuestion", to);
};
</script>
