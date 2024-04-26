<template>
  <div>
    <header class="md:flex md:relative md:flex-col md:justify-center">
      <div class="relative bg-[#d61000] h-12 mt-2 md:h-[calc(10.125vw-29.5px)] md:min-h-12 max-h-24">
        <div class="h-full md:w-full" />
      </div>
    </header>

    <main
      class="w-[85vw] mt-3 mb-3 mx-auto bg-white rounded-2xl p-4 pt-6 transition-all duration-300 md:pt-8 md:w-[88vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw]"
    >
      <slot />
    </main>
  </div>
</template>
