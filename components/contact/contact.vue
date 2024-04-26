<template>
  <div>
    <p :class="{ 'font-bold': boldName }">
      {{ name }}
    </p>
    <p v-if="telephon">
      Telefon: {{ telephon }}
    </p>
    <p v-if="telefax">
      Telefax: {{ telefax }}
    </p>
    <p v-if="mobile">
      Mobil: {{ mobile }}
    </p>
    <p>
      E-Mail:
      <LinkMailToLink :mail-adress="email">
        {{ email }}
      </LinkMailToLink>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  email: string
  telephon?: string
  telefax?: string
  mobile?: string
  boldName?: boolean
}

withDefaults(defineProps<Props>(), {
  boldName: false,
})
</script>
