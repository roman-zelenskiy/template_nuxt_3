<script setup lang="ts">
  defineProps<{
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
  }>();
</script>

<template>
  <nuxtLink v-if="to" class="focus:outline-none focus:outline-0 disabled:opacity-100" :to="to">
    <slot />
  </nuxtLink>
  <button
    v-else
    class="focus:outline-none focus:outline-0 disabled:opacity-100"
    :type="type || 'button'"
  >
    <slot />
  </button>
</template>

<style scoped></style>
