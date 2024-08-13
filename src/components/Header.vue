<template>
  <div class="header-container">
    <h3>Huy Le Vu Anh</h3>
    <div class="link-container">
      <a>About</a>
      <a>Project</a>
      <a>Experience</a>
      <a>Reference</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  h3 {
    color: $primary-color;
  }
}

.link-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
</style>
