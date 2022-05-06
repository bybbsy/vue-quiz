import { createStore, Module } from 'vuex-smart-module';
import { quizModule } from './modules/quizModule/store';

const root = new Module({
  modules: {
    quizModule
  }
})

const store = createStore(root);

export default store;