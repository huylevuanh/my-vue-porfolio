<script setup>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
</script>

<template>
  <div class="app-layout">
    <Header />
    <Home />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.802);
  min-height: 80vh;
  max-width: 90vw;
  box-shadow: rgba(54, 53, 53, 0.25) 0px 54px 55px,
    rgba(221, 116, 84, 0.12) 0px -12px 30px,
    rgba(122, 119, 119, 0.12) 0px 4px 6px,
    rgba(129, 126, 126, 0.17) 0px 12px 13px,
    rgba(137, 136, 136, 0.09) 0px -3px 5px;
}
</style>
