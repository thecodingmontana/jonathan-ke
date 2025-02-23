<script setup lang="ts">
import {
  useScroll,
  useTransform as motionUseTransform,
  Motion,
} from 'motion-v'
import { useWindowSize } from '@vueuse/core'
import { images, randomImagesSet1, randomImagesSet2 } from '~/data/images'

const { width, height } = useWindowSize()

const carouselWrapperRef = useTemplateRef('carouselWrapperRef')

const { scrollYProgress } = useScroll({
  target: carouselWrapperRef,
  offset: ['start start', 'end start'],
})

const maximumScale = computed(() => {
  const windowRatio = height.value / width.value
  const xScale = 1.66667
  const yScale = xScale * windowRatio
  return Math.max(xScale, yScale)
})
const scale = motionUseTransform(
  scrollYProgress,
  [0.3, 0.5, 0.66],
  [maximumScale.value * 1.5, maximumScale.value, 1],
)
const opacity = motionUseTransform(scrollYProgress, [0.64, 0.66], [0, 1])

const currentIndex = ref(0)

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<template>
  <section class="bg-black text-white pb-8">
    <div
      ref="carouselWrapperRef"
      class="overflow-clip sm:h-[300vh] hidden sm:block sm:mt-[-100vh]"
    >
      <div
        class="h-[70vh] sm:h-screen flex items-center sticky top-0"
      >
        <Motion
          as="div"
          :style="{ opacity }"
          class="absolute z-20 bg-black/4 backdrop-blur-sm h-[55vh] grid place-items-center p-5 bg-gradient-to-b from-transparent via-transparent/20 to-transparent dark:via-black/50 dark:to-black scale-[1.1]"
        >
          <Motion
            as="button"
            @click="prevCard"
          >
            <Icon
              name="solar:alt-arrow-left-line-duotone"
              class="size-16"
            />
          </Motion>
        </Motion>
        <Motion
          as="div"
          :style="{ opacity }"
          class="absolute right-0 z-20 bg-black/4 backdrop-blur-sm h-[55vh] grid place-items-center p-5 bg-gradient-to-b from-transparent via-transparent/20 to-transparent dark:via-black/50 dark:to-black scale-[1.1]"
        >
          <Motion
            as="button"
            @click="nextCard"
          >
            <Icon
              name="solar:alt-arrow-right-line-duotone"
              class="size-16"
            />
          </Motion>
        </Motion>
        <div
          class="flex gap-5 mb-5 relative left-1/2 -translate-x-[115%] sm:-translate-x-1/2"
        >
          <Motion
            v-for="offset in [-1, 0, 1]"
            :key="(currentIndex + offset + images.length) % images.length"
            as="div"
            :style="{ scale: offset === 0 ? scale : 1, opacity: offset !== 0 ? opacity : 1 }"
            :animate="{
              scale: offset === 0 ? 1 : 0.8,
            }"
            :transition="{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }"
            class="shrink-0 sm:w-[40vw] aspect-video rounded-2xl overflow-clip"
          >
            <NuxtImg
              :src="
                images[(currentIndex + offset + images.length) % images.length]
                  ?.url
              "
              alt="image"
              class="w-full h-full object-cover"
            />
          </Motion>
        </div>
      </div>
    </div>

    <div class="space-y-3 sm:mt-0">
      <SmallImageCarousel :images="randomImagesSet1" />
      <div class="[--duration:74s] [--carousel-offset:-32px]">
        <SmallImageCarousel :images="randomImagesSet2" />
      </div>
    </div>
  </section>
</template>
