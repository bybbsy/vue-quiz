<template>
  <transition
    name="v"
    appear
    @after-enter="handleOnAfterLeave"
    >
    <li class="quizzes-list__item"
        :class="{'quizzes-list__item_locked': locked}">
      <div class="quiz-card__wrapper">
        <div class="quiz-card__front">
          <header class="quiz-card__header">
            <h1 class="quiz-card__title">{{ title }}</h1>
          </header>
          <div class="quiz-card__body">
            <figure class="quiz-card__picture">
              <img src="@/assets/desert-01.jpg" alt="">
            </figure>
          </div>
        </div>
        <div class="quiz-card__back">
          <header class="quiz-card__header">
            <h1 class="quiz-card__title">{{ title }}</h1>
          </header>
          <div class="quiz-card__body">
            <p class="quiz-card__text">{{ description }}</p>
          </div>
          <footer class="quiz-card__footer">
            <button class="quiz-item__button" type="button" @click="handleStartQuiz(quizIndex)">Start quiz</button>
          </footer>
        </div>
      </div>
    </li>
  </transition>
</template>

<script setup lang="ts">
import { quizModule } from '@/store/modules/quizModule/store';
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const quizContext = quizModule.context(useStore());

const props = defineProps({
  quizIndex: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

let locked = ref(true);

const handleOnAfterLeave = () => locked.value = false
const handleStartQuiz = (index: number) => quizContext.actions.openQuiz(index)
</script>

<style>
.quizzes-list__item {
  background-color: transparent;
  height: 200px;
  width: 350px; 
  list-style: none;
  margin: 0;
}

.quizzes-list__item_locked {
  pointer-events: none;
}

.quiz-card__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.5s all ease;
  box-shadow: 0px 0px 10px 5px rgba(134, 134, 134, 0.315);
  border-radius: 5px;
}

.quiz-card__front,
.quiz-card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: inherit;
}

.quizzes-list__item:hover .quiz-card__wrapper {
  transform: rotateY(180deg);
}

.quiz-card__back {
  background-color: tomato;
  transform: rotateY(180deg);
}

.quiz-card__header {
  background-color: #fff;
  display: flex;
  border-radius: 5px 5px 0 0;
  padding: 3px 0;
  width: 100%;
  transition: 0.5s all ease;
}

.quiz-card__title {
  width: 100%;
  font-size: 1em;
  text-align: center;
}

.quiz-card__body {
  display: flex;
  background: tomato;
  overflow: hidden;
  flex: 1 1 100%;
  /* height: 100%; */
  transition: 1s all ease;
}

.quiz-card__picture {
  margin: 0;
  width: 100%;
  height: 100%;
}

.quiz-card__picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quiz-card__text {
  overflow-y: auto;
  padding: 0 15px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.quiz-card__text::-webkit-scrollbar {
  display: none;
}

.quiz-card__footer {
  display: flex;
  align-items: flex-end;
  border-radius: 0 0 5px 5px;
  padding: 5px 15px 10px;
  justify-content: end;
  transition: 0.5s all ease;
}

.quiz-item__button {
  display: block;
  background-color: #FCA61F;
  border: none;
  font-size: 1.2em;
  padding: 5px 7px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgba(134, 134, 134, 1);
}

.v-enter-active,
.v-leave-active {
  transition: margin 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  margin-top: -100%;
  margin-left: -100%;
}
</style>