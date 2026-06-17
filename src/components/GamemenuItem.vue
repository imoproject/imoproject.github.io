<template>
  <router-link :to="props.link" class="item">
    <button
      class="button"
      :class="{ active: !props.disable }"
      :style="{ backgroundColor: props.backgroundColor || '#f6b12b' }"
      :disabled="props.disable || false"
      @click.prevent="startGame"
    >
      {{ props.label }}
    </button>
  </router-link>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap");
.item {
  width: 70%;
}

.button {
  appearance: none;
  padding: 1.5rem;
  border: 0 solid transparent;
  border-radius: 2rem;
  font-size: 2rem;
  font-family: "Kiwi Maru", serif;

  width: 100%;
  text-align: center;
  white-space: pre-line;
}

.button.active {
  cursor: pointer;
  transition: ease 0.3s;
  &&:hover {
    transform: scale(1.03);
    transition: ease 0.3s;
  }
}
</style>
<script setup lang="ts">
const props = defineProps<{
  // ここに必要なpropsの型を定義
  label: string;
  link: string;
  backgroundColor?: string;
  size?: string;
  disable?: boolean;
}>();

const emit = defineEmits<{
  start: [];
}>();

const startGame = () => {
  emit("start");
};
</script>
