<template>
  <header>
    <nav class="nav-bar">
      <h1 class="site-title">HikerFeed Team</h1>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.nav-bar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  color: white;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
}
</style>