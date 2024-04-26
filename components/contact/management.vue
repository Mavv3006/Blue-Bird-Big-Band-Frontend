<template>
  <Contact
    class="w-1/2"
    email="buchung@bluebirdbigband.de"
    name="Rudi Kolbinger"
    telephon="06232 621915"
    :bold-name="boldName"
  />
</template>

<script setup lang="ts">
interface Props {
  boldName?: boolean
}

withDefaults(defineProps<Props>(), { boldName: false })
</script>

<style scoped>

</style>
