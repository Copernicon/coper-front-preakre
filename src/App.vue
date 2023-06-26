<template>
  <div class="flex flex-col h-screen justify-between bg-info bg-no-repeat bg-black bg-cover bg-center">
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
</style>