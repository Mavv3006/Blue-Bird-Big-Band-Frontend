<template>
  <ul class="hidden md:flex md:w-full text-white mt-3 gap-9 justify-center content-center">
    <NavigationDesktopElement
    v-for="(route, index) in routes"
      :key="index"
      :element="route"
    />
  </ul>
</template>

<script lang="ts" setup>
const routes = useRoutes()
</script>
