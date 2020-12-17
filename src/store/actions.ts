import { ActionTree, ActionContext } from 'vuex'
import { ActionTypes } from './action_types'
import { MutationTypes } from './mutation_types'
import { Mutations } from './mutations'
import { State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUNTER] ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256
        commit(MutationTypes.SET_COUNTER, data)
        resolve(data)
      })
    })
  }
}
