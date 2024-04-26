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
    </div>

    <NavigationDesktop />
  </header>
</template>
