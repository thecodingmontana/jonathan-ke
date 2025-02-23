<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: `Jonathan KE` },
    {
      name: 'description',
      content: 'Capture every precious moment with us.',
    },
    {
      property: 'og:description',
      content: 'Capture every precious moment with us.',
    },
    { property: 'og:url', content: 'Capture every precious moment with us.' },
    { name: 'twitter:title', content: 'Capture every precious moment with us.' },
    {
      name: 'twitter:description',
      content: 'Capture every precious moment with us.',
    },
    { name: 'twitter:site', content: 'Capture every precious moment with us.' },
  ],
  title: `Jonathan KE`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Jonathan KE',
  description: 'Capture every precious moment with us.',
})
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#faf7f2] dark:bg-background xl:overflow-visible">
    <AppHeader />
    <slot />
    <AppFooter />
  </main>
</template>
