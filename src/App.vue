<template>
  <router-view/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
 

onMounted(async () => {
  const res = await fetch('https://api.npoint.io/f8af70ec660f16f5456a')
})

</script>

<style>
html, body, *  {
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
}

.content-container_medium {
  width: 1440px;
  margin: 0 auto;
}

.content-container_large {
  width: 1600px;
  margin: 0 auto;
}

.content-container_small {
  width: 1200px;
  margin: 0 auto;
}
</style>
