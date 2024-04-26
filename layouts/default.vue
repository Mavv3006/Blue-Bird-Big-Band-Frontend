<template>
  <div>
    <NavigationHeader />

    <main
      class="w-[85vw] mt-3 mb-3 mx-auto bg-white rounded-2xl p-4 pt-6 transition-all duration-300 md:pt-8 md:w-[88vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw]"
    >
      <slot />
    </main>
  </div>
</template>

<style>
body {
    background-color: #041286;
}
</style>
