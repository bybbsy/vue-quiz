<template>
  <router-view/>
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  margin: 0;
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
