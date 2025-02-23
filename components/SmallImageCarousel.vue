<script setup lang="ts">
import type { Image } from '~/types'

const props = defineProps<{
  images: Image[]
}>()

const images = computed(() => {
  return props?.images
})
</script>

<template>
  <div class="overflow-clip">
    <div class="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset, 0px]">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="aspect-video w-[55vw] sm:w-[25vw] shrink-0"
      >
        <NuxtImg
          :src="image.url"
          alt="image"
          class="w-full h-full rounded-xl object-cover"
        />
      </div>
    </div>
  </div>
</template>
