<template>
  <router-link :to="props.link" class="item">
    <div
      class="icon-logo"
      :style="{ backgroundColor: props.backgroundColor || 'transparent' }"
    >
      <img
        :src="props.icon"
        class="icon-picture-logo"
        :style="{
          width: props.size + '%',
        }"
      />
    </div>
    <div class="text">{{ props.label }}</div>
  </router-link>
</template>

<style>
.item {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.icon-logo {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-picture {
  width: 80px;
  border-radius: 10px;
}
.icon-picture-logo {
  width: 100%;
  border-radius: 15%;
}
.text {
  color: black;
  background-color: white;
  padding: 10px;
  width: 160px;
  text-align: center;
  border-radius: 0 20px 20px 0;
  white-space: pre-line;
}
.item:hover {
  cursor: pointer;
}
.menu-wrapper {
  transition: all 0.3s ease;
  z-index: 10;
}
.hamburger-menu {
  display: none;
}
@media screen and (max-width: 720px) {
  .menu-wrapper {
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
  .menu-wrapper.show {
    transform: translateX(0);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f2e7;
    height: 100vh;
  }
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
  }
  .bar {
    width: 30px;
    height: 3px;
    background-color: #ad1a45;
    margin: 4px 0;
    border-radius: 1px;
  }
}
</style>
<script setup lang="ts">
const props = defineProps<{
  // ここに必要なpropsの型を定義
  label: string;
  link: string;
  icon: string;
  backgroundColor?: string;
  size?: string;
}>();
</script>
