import { NavigationDesktop } from '#build/components';
<template>
  <header class="md:flex md:relative md:flex-col md:justify-center">
    <div class="relative bg-[#d61000] h-12 mt-2 md:h-[calc(10.125vw-29.5px)] md:min-h-12 max-h-24">
      <div class="h-full md:w-full">
        <NuxtLink
          class="flex justify-center items-center h-full p-0"
          to="/"
        >
          <img
            src="/img/logos/logo-header.gif"
            alt="Logo der Blue Bird Big Band"
            class="max-h-12 pr-11 md:pr-0 md:h-full md:max-h-none"
          >
        </NuxtLink>
      </div>

      <button
        :class="{ 'open-mobile-toggle': mobileNavIsOpen }"
        class="h-[48px] w-[60px] absolute top-0 right-0 text-white md:hidden"
        @click="toggleMobileMenu()"
      >
        <font-awesome-icon
          v-if="mobileNavIsOpen"
          class="text-2xl translate-y-[2px]"
          icon="fa-solid fa-close"
        />
        <font-awesome-icon
          v-if="!mobileNavIsOpen"
          class="text-xl"
          icon="fa-solid fa-bars"
        />
      </button>
    </div>

    <NavigationDesktop />

    <!-- <div class="relative">

    </div> -->
  </header>
</template>

<script setup lang="ts">
const mobileNavIsOpen = ref<boolean>(false)

const toggleMobileMenu = () => {
  mobileNavIsOpen.value = !mobileNavIsOpen.value
}
</script>

<style scoped>
.open-mobile-toggle {
    background-color: #041286;
}
</style>
