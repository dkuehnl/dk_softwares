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
      <fwb-navbar-logo alt="dk software solutions" image-url="/images/Logo_normal.png" link="#">
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
      <fwb-button color="dark" outline class="cursor-pointer hover:bg-blue-800" href="/contact" tag="router-link">
        Jetzt Anfragen!
      </fwb-button>
    </template>
  </fwb-navbar>

  <RouterView/>

    <!--Footer-->
  <footer class="px-6 sm:px-4 md:px-10 lg:px-20 xl:px-32 pt-10 pb-6 bg-[#004366] text-white">
    <div class="mx-auto max-w-screen-xl">
      <div class="flex flex-col md:flex-row md:justify-between gap-8">
        <div class="flex justify-center md:justify-start">
          <a href="#" class="flex items-center">
            <img src="/images/Logo_weiss.png" class="h-8 w-auto" alt="dk-software-solutions" />
          </a>
        </div>
        <!-- Grid mit Links -->
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 text-center sm:text-left">
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase">Services</h2>
            <ul>
              <li class="mb-2">
                <RouterLink :to="{ path: '/services', hash: '#web' }" class="hover:underline">Web</RouterLink>
              </li>
              <li class="mb-2">
                <RouterLink :to="{ path: '/services', hash: '#desktop' }" class="hover:underline">Desktop</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ path: '/services', hash: '#server' }" class="hover:underline">Server</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase">About</h2>
            <ul>
              <li class="mb-2">
                <RouterLink to="/about" class="hover:underline">About me</RouterLink>
              </li>
              <li>
                <RouterLink to="/faq" class="hover:underline">FAQ</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase">Legal</h2>
            <ul>
              <li>
                <RouterLink to="/impressum" class="hover:underline">Impressum & Datenschutz</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-6 border-white opacity-25 lg:my-8" />

      <div class="flex flex-col sm:flex-row items-center justify-between">
        <span class="text-xs sm:text-sm text-white/80 text-center">
          © 2025 <a href="#" class="hover:underline">Dennis Kühnlein</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:mt-0 space-x-6">
          <a href="#" class="text-white/80 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
          </a>
          <a href="#" class="text-white/80 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
          </a>
          <a href="#" class="text-white/80 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>