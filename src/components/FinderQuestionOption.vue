<template>
  <div
    @click="nextQuestion(props.to)"
    class="option"
    :style="{
      backgroundColor: props.backgroundColor || '#f4de6a',
      color: props.fontColor || '#4b1b22',
    }"
  >
    {{ props.label }}
  </div>
</template>

<style>
@font-face {
  font-family: "dot"; /*任意のフォントファミリー名でOK*/
  src: url("../assets/fonts/BestTen-DOT.otf"); /*fontがあるパスを書いて、formatを指定*/
  font-display: swap; /*ダウンロード状況に応じてフォントの表示を変える */
}

.option {
  width: fit-content;
  min-width:fit-content;
  font-family: "dot";
  margin: 1rem;
  padding: 3rem;
  font-weight: 100;
  box-shadow: 0 10px 0px rgba(75, 27, 34, 1);
  border-radius: 50%;
  transition: ease 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
@media screen and (max-width: 720px) {
 .option {
  font-size: 1.5rem;
}
}
@media screen and (min-width: 721px) {
  .option {
    font-size: 3rem;
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{
  // ここに必要なpropsの型を定義
  label: string;
  fontColor?: string;
  backgroundColor?: string;
  to: number;
}>();

const emit = defineEmits<{
  nextQuestion: [number];
}>();

const nextQuestion = (to: number) => {
  emit("nextQuestion", to);
};
</script>
