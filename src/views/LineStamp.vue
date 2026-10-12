<template>
  <section>
    <div class="wrapper" v-for="(item, index) in contents" :key="index">
      <h1>{{ item.subtitle }}</h1>
      <h2>
        {{ item.title }}
      </h2>
      <p>
        {{ item.content }}
      </p>
    </div>
    <div class="wrapper" v-for="(item, index) in linestamps" :key="index">
      <a :href="item.url" target="_blank"
        ><div class="line-wrapper horizonal">
          <img :src="item.img_url" class="line-picture2" />
          <p>
            {{ item.label }}
          </p>
        </div></a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetLine } = useSpreadsheet();
const { spreadsheetLineStamp } = useSpreadsheet();
const contents = computed(() => spreadsheetLine.value || {});
const linestamps = computed(() => spreadsheetLineStamp.value || {});
</script>

<style scoped lang="scss">
.line-wrapper {
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}
.line-wrapper img {
  width: 100px;
  height: auto;
  margin-right: 10px;
}
.line-wrapper p {
  font-size: 1rem;
  color: #333;
}
</style>
