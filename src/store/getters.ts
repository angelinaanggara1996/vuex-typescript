import { GetterTree } from 'vuex'
import { State } from './state'

// Getters type
export type Getters = {
  doubledCounter(state: State): number;
}

// getters with Getters type
export const getters: GetterTree<State, State> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2
  }
}
