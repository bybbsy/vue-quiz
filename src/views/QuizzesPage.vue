<template>
  <main-layout>
    <transition name="quiz-appear-animation" appear >
      <div class="quiz-wrapper" v-if="isQuiz" >
        <quiz-form
        :quiz="quiz"
        :page="page"
        :finishQuiz="handleFinishQuiz"
        :getQuestion="getQuestion"
        :nextPage="handleNextPage"
        :setAnswer="handleSetAnswer"
        :errorMessage="'Thats wrong, try again.'"
        >
        </quiz-form>
      </div>
    </transition>
    <section class="quizzes-wrapper">
        <ul class="quizzes-list">
          <quiz-card v-for="(card, i) in allQuizzes"
            :key="i"
            :quiz-index="i"
            :title="card.name"
            :description="card.description"
            ></quiz-card>
        </ul>
    </section>
  </main-layout>
</template>

<script setup lang="ts">
import mainLayout from '@/layouts/mainLayout.vue';
import QuizCard from '@/components/QuizCard.vue';
import { quizModule } from '@/store/modules/quizModule/store';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { Choice, Question } from '@/store/modules/quizModule/types';
import QuizForm from '@/components/quiz/QuizForm.vue';

const quizContext = quizModule.context(useStore());

quizContext.actions.fetchQuizzes();
    
let quiz = computed(() => quizContext.getters.currentQuiz);
let allQuizzes = computed(() => quizContext.getters.allQuizzes);

let getQuestion = computed(() => quizContext.getters.getQuestion);

let isQuiz = computed(() => quizContext.getters.isQuiz);

let page = computed(() => quizContext.getters.currentPage);

const handleStartQuiz = (i: number) => quizContext.actions.openQuiz(i);
const handleFinishQuiz = () => quizContext.actions.closeQuiz();
const handleNextPage = () => quizContext.actions.nextPage();

const handleSetAnswer = (payload: { question: Question, choice: Choice }) => quizContext.actions.setAnswer(payload);

// const handleStartQuiz = (i: number) => {
//   return i;
// }
</script>

<style>
.quiz-wrapper {
   
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 32, 32, 0.5);
  padding: 15px;
  z-index: 1;
}

.quizzes-wrapper {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  padding-top: 100px;
}

.quizzes-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 15px;
  justify-content: center;
}

.quiz-appear-animation-enter-active,
.quiz-appear-animation-leave-active {
  transition: all 0.5s ease;
}

.quiz-appear-animation-enter-from,
.quiz-appear-animation-leave-to {
  opacity: 0;
  transform: scale(0) rotateZ(-180deg);
}

.quiz-appear-animation-enter-to,
.quiz-appear-animation-leave-from {
  opacity: 1;
  transform: scale(1) rotateZ(0);
}

</style>