<template>
  <button :class="computedClass">
    <slot />
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});

const computedClass = computed(() => {
  return [`btn btn-${props.variant}`];
});
</script>

<style scoped lang="scss">
.btn {
  padding: 10px 20px;
  border: unset;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: 500;
}

.btn-primary {
  background-color: $primary-color;
  color: white;
}

.btn-secondary {
  background-color: white;
  color: rgb(28, 99, 28);
}

.btn-outline {
  background-color: black;
  border: 0.5px solid $primary-color;
  color: $primary-color;
}
</style>
