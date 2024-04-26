<template>
  <li
    v-if="element.link && !element.submenu"
    class="relative px-4 leading-[3em] cursor-pointer font-semibold tracking-[1px] rounded-md whitespace-nowrap hover:bg-[#ffffff33]"
  >
    <a
      v-if="element.link"
      :href="element.link"
    >{{ element.linkName }}</a>
  </li>
  <li
    v-if="!element.link && element.submenu"
    class="nav-container pr-7 inline-block relative px-4 leading-[3em] cursor-pointer font-semibold tracking-[1px] rounded-md whitespace-nowrap hover:bg-[#ffffff33]"
  >
    <span>{{ element.linkName }}</span>
    <ul class="dropdown-content hidden absolute bg-red-600 py-2 z-10 shadow-md -ml-4 rounded-md min-w-[112px]">
      <li
        v-for="(submenu, index) in element.submenu"
        :key="index"
        class="relative px-4 leading-[3em] cursor-pointer font-semibold tracking-[1px] rounded-md whitespace-nowrap hover:bg-[#ffffff33]"
      >
        <a :href="submenu.link">{{ submenu.linkName }}</a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{ element: Route }>()

if (props.element.link !== undefined && props.element.submenu !== undefined) {
  throw TypeError('both link and submenu are not supported')
}
</script>

<style scoped>
.nav-container:hover .dropdown-content {
    display: block;
}

.nav-container:after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    right: 13px;
    width: 0;
    height: 0;
    border-top: 4px solid #d61000;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    transition: border-bottom 0.1s, border-top 0.1s 0.1s;
}
</style>
