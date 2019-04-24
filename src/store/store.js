import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
      state: {
            counter: 0
      },
      getters: {
            doubleCount: (state) => {
                  return state.counter * 10;
            },
            stringCount: (state) => {
                  return state.counter + " Counter";
            }
      },
      mutations: {
            increment: (state, by) => {
                  state.counter += by;
            },
            decrement: (state) => {
                  state.counter--;
            }
      },
      actions: {
            increment: ({commit}, payload) => {
                  setTimeout(() => {
                        commit('increment', payload.by);
                  },payload.duration);
            },
            decrement: ({commit}) => {
                  setTimeout(() => {
                        commit('decrement');
                  },2000);
            }
      }
});