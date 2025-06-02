<script setup>
  import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'

</script>

<template>
  <div class="pt-5 pl-33 pr-33 pb-5">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item home href="/" tag="router-link">
        Home
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item href="#">
        About me
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
  </div>
</template>