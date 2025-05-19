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
      <fwb-navbar-logo alt="dk software solutions" image-url="images/Logo_normal.png" link="#">
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <RouterLink to="/" class="text-lg text-shadow-md">
          <fwb-navbar-link>
            Home
          </fwb-navbar-link>
        </RouterLink>
        <RouterLink to="/services" class="text-lg text-shadow-md">
          <fwb-navbar-link>
            Services
          </fwb-navbar-link>
        </RouterLink>
        <RouterLink to="/projects" class="text-lg text-shadow-md">
          <fwb-navbar-link>
            Projects
          </fwb-navbar-link>
        </RouterLink>
        <RouterLink to="/contact" class="text-lg text-shadow-md">
          <fwb-navbar-link>
            Contact
          </fwb-navbar-link>
        </RouterLink>
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