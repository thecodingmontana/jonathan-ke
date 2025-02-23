<script setup lang="ts">
import type { Image } from "~/types";
import { Motion, AnimatePresence } from "motion-v";
import CardItem from "./CardItem.vue";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { ref, computed } from "vue";

const props = defineProps<{
  images: Image[];
}>();

const images = computed(() => props.images);

const currentIndex = ref(0);

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevCard = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <div class="overflow-clip -mt-[25vh] sm:mt-0 sm:h-[300vh] bg-[#faf7f2] dark:bg-background">
    <div
      class="h-[70vh] flex items-center top-0 relative overflow-hidden"
    >
      <AnimatePresence as="div" multiple :initial="false"
        class="flex gap-5 mb-5 relative left-[10%] sm:left-[30%]"
      >
        <CardItem
          v-for="offset in [-1, 0, 1]"
          :key="(currentIndex + offset + images.length) % images.length"
          :image="images[(currentIndex + offset + images.length) % images.length]!"
          :offset="offset"
        />
      </AnimatePresence>
    </div>

    <button
      @click="nextCard"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors z-10"
    >
      <ArrowRight class="w-6 h-6" />
    </button>

    <!-- <div class="text-center mt-8">
      <h2 class="text-white text-4xl font-light mb-2">{{ images[currentIndex].title }}</h2>
      <p class="text-white/60 text-sm">{ View all Showreels }</p>
    </div> -->
  </div>
</template>
