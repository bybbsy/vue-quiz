<template>
  <main-layout>
    <section class="section-welcome">
      <div class="main-welcome">
        <div class="form-welcome__wrapper">
          <div class="content-container_small">
            <transition name="title" appear>
              <h1 class="form-title__main form-title__main_big">The quiz application made with vue and coffee</h1>
            </transition>

            <transition name="title" appear>
              <h2 class="form-title__main form-title__main_medium">Play on any device in any place</h2>
            </transition>
             
            <div class="form-welcome__buttons">
              <transition name="button" appear>
                <router-link to="" class="form-welcome__button form-welcome__button_transparent">About</router-link>   
              </transition>
              <transition name="button" appear>       
                <router-link to="" class="form-welcome__button form-welcome__button_orange">Play</router-link>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="main-background">
        <transition name="cactus" appear>
          <div class="cactus-bg"></div>        
        </transition>
        <transition name="sun" appear>
          <div class="sun-bg"></div>
        </transition>
        <transition name="sand-left" appear>
          <div class="sand__left-bg"></div>
        </transition>
        <transition name="background" appear>
          <div class="background-bg"></div>
        </transition>
        <transition name="cloud-1" appear>
          <div class="cloud-1-bg"></div>
        </transition>
        <transition name="cloud-2" appear>
          <div class="cloud-2-bg"></div>
        </transition>
        <transition name="cloud-3" appear>
          <div class="cloud-3-bg"></div>
        </transition>
      </div>
    </section>
    <section class="section-welcome">

    </section>
  </main-layout>
</template>

<script setup lang="ts">
import mainLayout from '@/layouts/mainLayout.vue';
</script>

<style>
.form-welcome__wrapper {
  border-radius: 25px;
  height: 650px;
  margin: 100px auto 0;
  transition: all 0.2s ease-in-out;
}


.form-title__main_big {
  font-size: 2.25em;
}

.form-welcome__button {
  display: inline-block;
  border-radius: 25px;
  /* line-height: 150%; */
  font-size: 2em;
  padding: 7px 25px;
  margin: 0 15px;
}

.form-welcome__buttons {
  margin-top: 60px;
}

.form-welcome__button_transparent {
  background-color: transparent;
  border: 1px solid rgba(24, 2, 40, 0.8);
  color: #2c3e50;
  transition: 0.5s all ease-out;
}

.form-welcome__button_transparent:hover {
  color: #FCA61F;
  background-color: rgba(24, 2, 40, 0.8);
}

.form-welcome__button_orange {
  background-color: #FCA61F;
  color: #2c3e50;
}


.main-background {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  -webkit-animation: color-change-2x 10s linear infinite alternate both;
  animation: color-change-2x 10s linear infinite alternate both;
}

@-webkit-keyframes color-change-2x {
  0% {
    background: #ff9a9e;
  }
  100% {
    background: #a18cd1;
  }
}
@keyframes color-change-2x {
  0% {
    background: #ff9a9e;
  }
  100% {
    background: #a18cd1;
  }
}

.cactus-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 660px;
  height: 477px; 
  background: url('@/assets/mainBackground/cactus.svg') no-repeat;
  background-size: cover;
  z-index: -1;
}

.sun-bg {
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-15%, -20%);
  width: 500px;
  height: 500px;
  background: url('@/assets/mainBackground/sun.svg') no-repeat;
  background-size: cover;
  z-index: -1;
}

.sand__left-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background: url('@/assets/mainBackground/sand.svg') no-repeat;
  background-size: cover;
  z-index: -2;
  transform: scale(1);
}


.background-bg {
  position: absolute;
  bottom: 120px;
  right: 0;
  width: 100%;
  height: 350px;
  background: url('@/assets/mainBackground/background.svg') no-repeat;
  background-size: cover;
  z-index: -3;
  transform: scale(1);
}

.cloud-1-bg {
  position: absolute;
  top: 120px;
  left: 120px;
  width: 288px;
  height: 120px;
  background: url('@/assets/mainBackground/cloud-1.svg') no-repeat;
  background-size: cover;
  z-index: -1;
  transform: scale(1);
}

.cloud-2-bg {
  position: absolute;
  top: 25%;
  right: 30%;
  width: 260px;
  height: 86px;
  background: url('@/assets/mainBackground/cloud-2.svg') no-repeat;
  background-size: cover;
  z-index: -1;
  transform: scale(1);
}

.cloud-3-bg {
  position: absolute;
  top: 10%;
  right: 30%;
  width: 650px;
  height: 140px;
  background: url('@/assets/mainBackground/cloud.svg') no-repeat;
  background-size: cover;
  z-index: -1;
  transform: scale(1);
}

.main-welcome {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  padding-top: 100px;
}

/* Transitions */

.cactus-enter-active,
.cactus-leave-active {
  transition: bottom .5s ease;
}

.cactus-enter-from,
.cactus-leave-to {
  bottom: -100%;
}

.sun-enter-active,
.sun-leave-active {
  transition: top .5s ease;
}

.sun-enter-from,
.sun-leave-to {
  top: -100%;
}

.sand-left-enter-active,
.sand-left-leave-active {
  transition: all .5s ease;
}

.sand-left-enter-from,
.sand-left-leave-to {
  transform: scale(1.1);
}

.cloud-1-enter-active,
.cloud-1-leave-active {
  transition: all .5s ease;
}

.cloud-1-enter-from,
.cloud-1-leave-to {
  left: 0;
  top: 0;
  transform: scale(1.1);
}

.cloud-2-enter-active,
.cloud-2-leave-active {
  transition: all .5s ease;
}

.cloud-2-enter-from,
.cloud-2-leave-to {
  right: 0;
  top: 0;
  transform: scale(1.1);
}

.cloud-3-enter-active,
.cloud-3-leave-active {
  transition: all .6s ease;
}

.cloud-3-enter-from,
.cloud-3-leave-to {
  right: 0;
  top: 0;
  transform: scale(1.1);
}

.title-enter-active,
.title-leave-active {
  transition: all .6s ease;
}

.title-enter-from,
.title-leave-to {
  transform: scale(1.1);
}

.button-enter-active,
.button-leave-active {
  transition: all .6s ease;
}

.button-enter-from,
.button-leave-to {
  transform: rotate(90deg) scale(1.7);
}

</style>