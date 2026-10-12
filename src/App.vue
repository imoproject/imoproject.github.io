<template>
  <Header :open="isMenuOpen" @toggle-menu="toggleMenu" />
  <Sidemenu :open="isMenuOpen" @toggle-menu="toggleMenu" />

  <router-view class="router-view" />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidemenu from "./components/Sidemenu.vue";

import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
@use "../src/assets/css/breakpoints" as *;

@include pc {
  .router-view {
    margin-left: 300px;
    margin-top: 10vh;
    padding: 5vh 5vw;
  }
}
@include sp {
  .router-view {
    margin-top: 10vh;
    padding: 5vh 5vw;
  }
}
</style>
