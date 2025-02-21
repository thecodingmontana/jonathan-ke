<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "motion-v";
import { ArrowUpRight } from "lucide-vue-next";

const images = ref([
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Desk with typewriter",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Lemon on paper",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1677788876573-0fe28b37c2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzcyUyMGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Yellow boots with flowers",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1669725687152-498e152687ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmUlMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D",
    alt: "Coffee art",
  },
  {
    src: "https://images.unsplash.com/photo-1716998462039-02ba97a48036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbGRsaWZlJTIwYWZyaWNhfGVufDB8fDB8fHww",
    alt: "Palm tree",
  },
]);

const isHovered = ref(false);

const handleHoverStart = () => {
  isHovered.value = true;
};

const handleHoverEnd = () => {
  isHovered.value = false;
};
</script>

<template>
  <div class="min-h-screen sm:mt-0 sm:py-20 px-4">
    <div class="max-w-[92rem] mx-auto">
      <Motion
        as="p"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="text-sm uppercase tracking-wider mb-4"
        >Why Me</Motion
      >
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