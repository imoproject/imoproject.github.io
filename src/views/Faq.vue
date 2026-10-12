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
    <div class="wrapper" 
        v-if="faqs.length>0">
      <h1>{{ faqs?.[0]?.subtitle }}</h1>
      <h2>
        {{ faqs?.[0]?.title }}
      </h2>
      <p>
        {{ faqs?.[0]?.content }}
      </p>
      <div class="small-wrapper" v-for="(item, index) in qAndAs" :key="index">
          <div class="horizonal">
            <div class="Q">Q</div>
            <p>{{ item.question }}</p>
          </div>
          <div class="horizonal">
            <div class="A">A</div>
            <div>
              <p>
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetFaq } = useSpreadsheet();
const { spreadsheetFaqQAndA } = useSpreadsheet();
const contents_b = computed(
  () => spreadsheetFaq.value|| {}
);
const contents = computed(() =>
  Object.values(spreadsheetFaq.value).filter((item) => item.key !== "faq"),
);
const faqs = computed(() =>
  Object.values(spreadsheetFaq.value).filter((item) => item.key === "faq"),
);
const qAndAs = computed(
  () => spreadsheetFaqQAndA.value|| {}
);

</script>

<style scoped lang="scss">
@use "../assets/css/breakpoints" as *;
@include sp {
  .horizonal {
    align-items: baseline;
  }
}

.Q {
  color: white;
  background-color: #f8b500;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.A {
  color: white;
  background-color: #ad1a45;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.small-wrapper {
  margin: 5vh 0;
}
</style>
