<template>
  <the-header></the-header>
  <main class="main-wrapper" >
    <slot>
    </slot>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>


<style>

.main-wrapper {
  width: 100%; 
}

</style>