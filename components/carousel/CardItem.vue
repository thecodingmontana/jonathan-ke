<script setup lang="ts">
import { Motion } from "motion-v";
import type { Image } from "~/types";

const props = defineProps<{
  offset: number;
  image: Image
}>();

const offset = computed(() => {
  return props?.offset;
});

const image = computed(() => {
  return props?.image;
});
</script>

<template>
  <Motion
    as="div"
    class="w-[80vw] sm:w-[40vw] aspect-video rounded-2xl overflow-clip absolute shrink-0"
    :initial="{
      x: `${offset * 110}%`,
      scale: offset === 0 ? 1 : 0.8,
      zIndex: offset === 0 ? 2 : 1,
    }"
    :animate="{
      x: `${offset * 110}%`,
      scale: offset === 0 ? 1 : 0.8,
      zIndex: offset === 0 ? 2 : 1,
    }"
    :transition="{
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    }"
    :style="{
      transform: 'translateX(-50%) translateY(0%)',
    }"
  >
    <div class="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <img :src="image.url" alt="card.title" class="w-full
      h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      />
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <h2 class="text-white text-2xl font-light">{card.title}</h2>
      </div>
    </div>
  </Motion>
</template>
