<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { ArrowUpRight } from 'lucide-vue-next'

const images = ref([
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    alt: 'Desk with typewriter',
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    alt: 'Lemon on paper',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1677788876573-0fe28b37c2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzcyUyMGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Yellow boots with flowers',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1669725687152-498e152687ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmUlMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D',
    alt: 'Coffee art',
  },
  {
    src: 'https://images.unsplash.com/photo-1716998462039-02ba97a48036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbGRsaWZlJTIwYWZyaWNhfGVufDB8fDB8fHww',
    alt: 'Palm tree',
  },
])

const isHovered = ref(false)

const handleHoverStart = () => {
  isHovered.value = true
}

const handleHoverEnd = () => {
  isHovered.value = false
}
</script>

<template>
  <div class="sm:py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <Motion
        as="p"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="text-sm uppercase tracking-wider mb-4"
      >
        Works
      </Motion>
      <Motion
        as="h1"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        class="text-2xl sm:text-4xl md:text-5xl font-serif leading-tight max-w-3xl mb-16"
      >
        These are some of the photo work portfolios I've done. I do all kinds of
        photos ranging from brand photos to model photos
      </Motion>
      <div class="overflow-hidden relative">
        <Motion
          as="div"
          class="carousel"
          :class="{ paused: isHovered }"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, ease: 'easeOut' }"
          @mouseover="handleHoverStart"
          @mouseleave="handleHoverEnd"
        >
          <Motion
            v-for="(image, index) in [...images, ...images]"
            :key="index"
            as="div"
            class="carousel-item"
          >
            <Motion
              as="div"
              :hover="{ scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
            >
              <div
                class="relative w-[300px] h-[20rem] sm:h-[25rem] overflow-hidden rounded-lg group"
              >
                <NuxtImg
                  :src="image.src"
                  :alt="image.alt"
                  class="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    class="bg-white rounded-full p-2 scale-75 group-hover:scale-100 transition-transform duration-300"
                  >
                    <ArrowUpRight class="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Motion>
          </Motion>
        </Motion>
        <div
          class="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#faf7f2] to-transparent dark:hidden z-10"
        />
        <div
          class="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 dark:hidden"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.carousel {
  display: flex;
  gap: 1rem;
  animation: scroll 30s linear infinite;
  width: max-content;
}

.carousel.paused {
  animation-play-state: paused;
}

.carousel-item {
  width: 300px;
  height: 25rem;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
