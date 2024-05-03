<template>
  <div class="relative font-semibold shadow-lg">
    <div class="absolute w-full">
      <ul class="flex flex-col content-center">
        <NavigationMobileElement
          container-title="Home"
          link="/"
          z-index="1"
        />

        <NavigationMobileElement
          container-title="Aktuelles"
          z-index="2"
        >
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/auftritte">
              Auftritte
            </Link>
          </p>
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/presse">
              Presseinfos
            </Link>
          </p>
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/buchung">
              Buchungsinfos
            </Link>
          </p>
        </NavigationMobileElement>

        <NavigationMobileElement
          container-title="Band"
          z-index="3"
        >
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/about-us">
              Über uns
            </Link>
          </p>
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/musiker">
              Musiker
            </Link>
          </p>
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/anfahrt">
              Anfahrt
            </Link>
          </p>
        </NavigationMobileElement>

        <NavigationMobileElement
          container-title="Kontakt"
          z-index="4"
        >
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/kontakt">
              Kontakt
            </Link>
          </p>
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/impressum">
              Impressum
            </Link>
          </p>
        </NavigationMobileElement>

        <!-- <NavigationMobileElement
          v-if="isLoggedIn"
          containerTitle="Intern"
          z-index="5"
        >
          <p class="p-[14px] pl-[34px] text-[14px] tracking-[1px] bg-[#d61000] text-white">
            <Link href="/intern/emails">
              E-Mail Verteiler
            </Link>
          </p>
        </NavigationMobileElement> -->

        <!-- <NavigationMobileElement
                  v-if="!isLoggedIn"
                  containerTitle="Login"
                  link="login"
                  z-index="6"
              />

              <NavigationMobileElement
                  v-if="isLoggedIn"
                  as="button"
                  containerTitle="Logout"
                  :link="route('logout')"
                  method="POST"
                  z-index="6"
              /> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ isOpen: boolean }>()
defineEmits<{
  (e: 'update:isOpen', isOpen: boolean): void
}>()

// const isLoggedIn = computed<boolean>(() => usePage().props.auth.user !== null);
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
