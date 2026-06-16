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
@media screen and (min-width: 721px) {
  .router-view {
    margin-left: 350px;
    margin-top: 150px;
    padding: 20px;
  }
}
@media screen and (max-width: 720px) {
  .router-view {
    margin: 100px 10%;
  }
}
</style>
