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

</style>
