<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
  } from 'flowbite-vue'
</script>

<template>
  <fwb-navbar solid>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="vite.svg" link="#">
        dk software solutions
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
          <RouterLink to="/" class="text-blue-600">Home</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <RouterLink to="/about" class="text-blue-600">About</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Pricing
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          Contact
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>

  <RouterView/>
</template>