<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
    FwbButton
  } from 'flowbite-vue'
</script>

<template>
  <fwb-navbar solid>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="vite.svg" link="#">
        <span style="color: darkblue">dk</span>software<span style="color: darkblue">solutions</span>
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
          <RouterLink to="/" class="text-lg text-shadow-md">Home</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <RouterLink to="/about" class="text-lg text-shadow-md">Services</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <RouterLink to="/about" class="text-lg text-shadow-md">Pricing</RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <RouterLink to="/about" class="text-lg text-shadow-md">Contact</RouterLink>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-button color="dark" outline class="cursor-pointer">
        Get started
      </fwb-button>
    </template>
  </fwb-navbar>

  <RouterView/>
</template>