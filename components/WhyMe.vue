<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <div class="min-h-screen max-w-7xl mx-auto sm:mt-0 sm:py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <Motion
        as="p"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="text-sm uppercase tracking-wider mb-4"
      >
        Why Me
      </Motion>
      <Motion
        as="h1"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        class="text-2xl sm:text-4xl md:text-5xl font-serif leading-tight max-w-3xl mb-16"
      >
        I use my creativity and expertise to create timeless expressions and meaningful experiences for brands.
      </Motion>
      <div class="overflow-hidden relative">
        <ShuffleGrid class="h-[450px] sm:h-[750px]" />
      </div>
    </div>
  </div>
</template>
