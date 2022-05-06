<template>
  <header class="header" ref="header">
    <div class="content-container_medium">
      <div class="header__inner">
        <h1 class="header__title">Vue quiz</h1>
        <nav class="header__navigation">
          <ul class="header__list">
            <li class="header__item">
              <router-link to="/" class="header__link">Home</router-link>
            </li>
            <li class="header__item">
              <router-link to="/quizzes" class="header__link">Quiezzes</router-link>
            </li>

            <li class="header__item">
              <router-link to="/docs" class="header__link">Docs</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  top: 0px;
  background-color: rgba(24, 2, 40, 0.8);
  margin: 0;
  width: 100%;
  height: 80px;
  transition: 0.3s all ease;
  display: flex;
  align-items: center;
}

.header.header_scrolling {
  height: 60px;
}

.header__inner {
  display: flex;
  align-items: baseline;
  margin: 0 auto;
  width: 100%;
}

.header__title {
  color: rgb(242, 237, 237);
  font-size: 2em;
  font-variant: small-caps;
}

.header__list {
  margin-left: 2rem;
  display: flex;
  list-style: none;
}

.header__link {
  color: rgb(242, 237, 237);
  font-size: 1.25em;
}

.header__item:not(:first-child) {
  margin-left: 15px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const headerSitckyYOffset = 20;

let header = ref<HTMLElement>();

// #TODO implement as a helper
document.addEventListener('scroll', () => {
  if(document.body.scrollTop > headerSitckyYOffset || document.documentElement.scrollTop > headerSitckyYOffset) {
    header.value?.classList.add('header_scrolling');
  } else {
    header.value?.classList.remove('header_scrolling');
  }
})

</script>