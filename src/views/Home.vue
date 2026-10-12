<template>
  <section>
    <div class="wrapper" 
        v-for="(item, index) in contents" :key="index">
      <h1>{{ item.subtitle }}</h1>
      <h2>
        {{ item.title }}
      </h2>
      <p>
        {{ item.content }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetHome } = useSpreadsheet();
const contents = computed(
  () => spreadsheetHome.value|| {}
);
</script>

<style scoped lang="scss">
@media screen and (max-width: 720px) {
  section {
    margin-bottom: 0 !important;
    overflow: hidden;
  }
  .imo-home2 {
    width: 60%;
    transform: translateY(30px);
  }
}
@media screen and (min-width: 721px) {
  .imo-home2 {
    width: 250px;
    position: fixed;
    bottom: -30px;
    right: 3%;
    transform: rotateY(180deg);
  }
}
</style>
