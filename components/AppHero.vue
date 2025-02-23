<script setup lang="ts">
import { Motion } from 'motion-v'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const avatars = ref([
  {
    delay: 0.2,
    img:
      'https://plus.unsplash.com/premium_photo-1691411181835-f4f08c97e0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D',
    class: '-top-[5%] -left-[1%] sm:top-[20%] sm:left-[5%]',
  },
  {
    delay: 0.3,
    img:
      'https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW58ZW58MHx8MHx8fDA%3D',
    class: 'top-[45%] left-[10%] sm:left-[20%]',
  },
  {
    delay: 0.4,
    img:
      'https://images.unsplash.com/photo-1616076875330-72c90779688e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    class: 'top-[20%] left-[85%]',
  },
  {
    delay: 0.5,
    img:
      'https://images.unsplash.com/photo-1608009232260-9b527a5bb9bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWZyaWNhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    class: 'top-[45%] left-[72%]',
  },
])
</script>

<template>
  <section class="relative max-w-7xl mx-auto px-4 pt-5 pb-10 text-center">
    <div class="relative">
      <Motion
        as="p"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-gray-600 dark:text-primary mb-4"
      >
        Exceptional photos every time.
      </Motion>
      <Motion
        as="h1"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
        class="text-5xl md:text-6xl font-medium mb-6 max-w-3xl mx-auto"
      >
        Capture every precious moment with us
      </Motion>
      <Motion
        as="p"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.4 }"
        class="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto"
      >
        Because the best moments deserve to be remembered.
        <br>
        Let your memories shine through in every shot.
      </Motion>
      <Motion
        as="div"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 400 }"
        :hover="{ transform: 'translateY(-10px) translateY(0px)' }"
      >
        <Button size="lg">
          Book photoshoot now
        </Button>
      </Motion>
      <Motion
        v-for="(avatar, index) in avatars"
        :key="index"
        as="div"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: avatar.delay, duration: 0.5 }"
        :class="cn('absolute', avatar.class)"
      >
        <Motion
          as="div"
          :hover="{ rotate: 15, scale: 2.5 }"
          :transition="{ type: 'spring' }"
          class="relative size-12 sm:size-16 md:size-20 xl:size-24 pb-1.5 overflow-hidden rounded border-2 border-white bg-muted shadow-lg cursor-pointer"
        >
          <NuxtImg
            :src="avatar.img"
            alt="Student avatar"
            class="h-full w-full object-cover"
          />
        </Motion>
      </Motion>
    </div>
    <ArtGallery />
  </section>
</template>
