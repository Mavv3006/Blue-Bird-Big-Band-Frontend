<template>
  <a
    :href="`mailto:${mailAdress}`"
    class="border-b-2 border-transparent text-blue-900 hover:border-blue-900 focus:outline-none focus:text-blue-900 focus:border-blue-900 transition duration-150 ease-in-out"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{ mailAdress: string }>()
</script>
