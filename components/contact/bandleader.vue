<template>
  <Contact
    class="w-1/2"
    email="bandleiter@bluebirdbigband.de"
    mobile="0171 5808481"
    name="Klaus Gehrlein"
    :bold-name="boldName"
  />
</template>

<script setup lang="ts">
defineProps<{ boldName?: boolean }>()
</script>
