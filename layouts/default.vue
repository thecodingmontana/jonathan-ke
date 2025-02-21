<script setup lang="ts">
import ModalProvider from '~/providers/ModalProvider.vue';
</script>

<template>
  <main class="min-h-screen max-w-7xl mx-auto overflow-hidden xl:overflow-visible">
    <Header />
    <slot />
    <ModalProvider />
  </main>
</template>
