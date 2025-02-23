<script setup lang="ts">
import { AnimatePresence, Motion } from "motion-v";
import { cn } from "~/lib/utils";

const isOpenMenu = ref(true);
</script>

<template>
  <div class="bg-neutral-100">
    <Motion
      as="div"
      :animate="{
        width: isOpenMenu ? 'calc(100% - 32px)' : '40px',
        height: isOpenMenu ? 'calc(100% - 32px)' : '40px',
      }"
      className="fixed z-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 shadow-lg shadow-violet-800/20"
      :style="{
        top: '16px',
        right: '16px',
      }"
    />
    <Motion
      as="button"
      @click="isOpenMenu = !isOpenMenu"
      class="group fixed right-3 top-3 z-50 size-12 bg-white/0 transition-all hover:bg-white/20 rounded-xl"
    >
      <Motion
        as="span"
        :animate="{
          top: isOpenMenu ? '50%' : '35%',
          rotate: isOpenMenu ? 45 : 0,
        }"
        class="absolute block h-1 w-7 bg-white"
        :style="{
          left: '20%',
          transform: 'translateX(-50%) translateY(-50%)',
        }"
      />
      <Motion
        as="span"
        :animate="{
          opacity: isOpenMenu ? 0 : 1,
        }"
        class="absolute block h-1 w-7 bg-white"
        :style="{
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }"
      />
      <Motion
        as="span"
        :animate="{
          bottom: isOpenMenu ? '45%' : '35%',
          left: isOpenMenu ? '20%' : '60%',
          rotate: isOpenMenu ? -45 : 0,
        }"
        :class="cn('absolute block h-1 bg-white', isOpenMenu ? 'w-7' : 'w-2')"
        :style="{
          transform: 'translateX(-50%) translateY(50%)',
        }"
      />
    </Motion>
  </div>
</template>
