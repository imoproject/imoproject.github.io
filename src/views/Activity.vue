<template>
  <section>
    <div class="wrapper" v-for="(item, index) in contents" :key="index">
      <h1>{{ item.subtitle }}</h1>
      <h2>{{ item.title }}</h2>
      <p>
        {{ item.content }}
      </p>
      <img :src="item.img_url" class="activity-picture" v-if="item.img_url"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetActivity } = useSpreadsheet();
const contents = computed(
  () => spreadsheetActivity.value|| {}
);
</script>

<style scoped lang="scss">
.activity-picture {
  width: 70%;
  margin:5vh auto;
}

</style>
