<script setup lang="ts">
import { Motion } from 'motion-v'

const artCards = ref([
  {
    image:
      'https://images.unsplash.com/photo-1739889399685-c73e63753981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  },
  {
    image:
      'https://images.unsplash.com/photo-1734639430017-5756ea7fec63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    image:
      'https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1738935667717-75777a3aaf71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1739889399685-c73e63753981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  },
  {
    image:
      'https://images.unsplash.com/photo-1734639430017-5756ea7fec63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    image:
      'https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
  },
])
</script>

<template>
  <div class="relative h-[320px] mx-auto">
    <Motion
      v-for="(card, index) in artCards"
      :key="index"
      as="div"
      :class="`absolute cursor-pointer top-[20%] right-0 mx-auto left-0 w-[180px] h-[260px] rounded-[24px] shadow-lg overflow-hidden`"
      :style="{
        zIndex: artCards.length - index,
      }"
      :initial="{
        x: -100,
        y: 0,
        rotate: -15 + index * 5,
        opacity: 0,
      }"
      :animate="{
        x: -450 + index * 150,
        y: index === 0 || index === 6 ? 20 : index === 1 || index === 5 ? 10 : 0,
        rotate: -15 + index * 5,
        opacity: 1,
      }"
      :transition="{
        duration: 0.8,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }"
      :hover="{
        y: -20,
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25,
        },
      }"
    >
      <NuxtImg
        :src="card.image"
        :alt="`Artwork ${index + 1}`"
        class="object-cover h-full w-full"
      />
    </Motion>
  </div>
</template>
