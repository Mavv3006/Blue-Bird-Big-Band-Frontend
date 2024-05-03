<template>
  <div>
    <PageHeading>Auftritte</PageHeading>

    <div
      v-if="hasConcerts"
      class="flex flex-col gap-4"
    >
      <Concert
        v-for="(concert, index) in concerts"
        :key="index"
        :concert="concert"
      />
    </div>

    <p
      v-if="!hasConcerts"
      class="text-justify"
    >
      Aktuell sind keine Konzerte geplant.
    </p>
  </div>
</template>

<script lang="ts" setup>
const { data: concerts } = await useFetch('/api/concerts')

const hasConcerts = concerts !== null
</script>
