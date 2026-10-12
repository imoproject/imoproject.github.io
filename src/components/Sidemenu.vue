<script setup lang="ts">
import SidemenuChild from "./SidemenuChild.vue";
import { computed } from "vue";
import { useSpreadsheet } from "../compasables/useSpreadsheet";

const { spreadsheetCommonMain } = useSpreadsheet();
const { spreadsheetCommonSidemenu } = useSpreadsheet();
const menu = computed(() => spreadsheetCommonMain.value.menu?.label || "");
const menusentence = computed(
  () => spreadsheetCommonMain.value.menu_content?.label || "",
);
const menus = computed(() => spreadsheetCommonSidemenu.value || {});

const toggleMenu = () => {
  emit("toggleMenu");
};

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  toggleMenu: [];
}>();
</script>

<template>
  <div class="menu-wrapper" :class="{ show: open }">
    <div class="menu-upper">
      <div class="MENU horizonal">
        {{ menu }}
      </div>
      <div class="menu-detail horizonal">
        <p>{{ menusentence }}</p>
      </div>
    </div>
    <div class="menu-lower vertical">
      <SidemenuChild
        v-for="(item, index) in menus"
        :key="index"
        :label="item.label"
        :link="item.path"
        :icon="item.img_url"
        :backgroundColor="item.backgroundColor"
        :size="item.size ? Number(item.size) : undefined"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/css/breakpoints" as *;

/* =========================
   Menu全体
========================= */
.menu-wrapper {
  width: 300px;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  @include pc {
    top: 10vh; //ここはHeaderのheighyに合わせる
    height: 90vh;
  }
  @include sp {
    top: 10vh; //ここはHeaderのheighyに合わせる
    background-color: rgba(246, 242, 231, 0.7);
    height: 90vh;
  }
}

@include sp {
  //動きの部分のみ切り出し
  .menu-wrapper {
    transform: translateX(-100%);
  }
  .menu-wrapper.show {
    transform: translateX(0);
  }
}

/* =========================
   上の部分
========================= */
.MENU {
  background-color: #ad1a45;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #fffafa;
  padding-top: 3px;
  padding-bottom: 3px;
}
.menu-detail {
  color: #75464c;
  background-color: #c48696;
  padding: 3px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 14px 14px;
  font-size: 16px;
}
/*上部まとめ*/
.menu-upper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  flex-shrink: 0;
}
/* =========================
   下の部分
========================= */

.menu-lower {
  width: 90%;
  flex:1;
  justify-content: space-around;
}
</style>
