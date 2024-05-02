<template>
  <div>
    <PageHeading>Wegbeschreibung zur Probe</PageHeading>

    <div class="flex flex-col gap-8">
      <p class="text-justify">
        Probe ist jeden Mittwoch - außer in den Schulferien (
        <NavLink
          href="https://www.schulferien.org/Rheinland-Pfalz/rheinland-pfalz.html"
        >
          Ferientermine Rheinland-Pfalz
        </NavLink>
        ) - im Unterrichtsraum 115 im 1. OG der Musikschule der Stadt Speyer.
        Die <span class="font-bold">Einsteiger-Dometown-Big Band</span> probt
        von 18:15 bis 20:00 Uhr, die
        <span class="font-bold">BlueBirdBigBand</span> von 20:15 bis 22:00 Uhr.
      </p>

      <div>
        <p class="font-bold underline">
          Die Adresse lautet:
        </p>
        <p class="text-justify">
          Musikschule der Stadt Speyer
        </p>
        <p class="text-justify">
          Mausbergweg 144
        </p>
        <p class="text-justify">
          67346 Speyer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Anfahrt',
  ogTitle: 'Anfahrt',
})
</script>
