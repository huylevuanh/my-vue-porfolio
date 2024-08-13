<template>
  <div class="home-container">
    <div class="introduction-card">
      <h1>Hi, I ma Huy Le</h1>
      <h3>Frontend Developer</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <div class="btn-group">
        <CustomButton>Hire me</CustomButton>
        <CustomButton variant="outline">Let's talk</CustomButton>
      </div>
    </div>

    <div class="img-container">
      <img :src="Avatar" alt="Avatar" />
    </div>
  </div>
</template>

<script setup>
import CustomButton from "../components/CustomButton.vue";
import Avatar from "../assets/avatar.jpg";
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.introduction-card {
  width: 100%;
  height: 100%;
  max-width: 50%;

  h3 {
    color: $primary-color;
  }
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-group {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}
</style>
