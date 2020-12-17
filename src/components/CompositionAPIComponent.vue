<template>

</template>

<script lang="ts">
import { defineComponent, computed, h } from 'vue'
import { useStore } from '../store'
import { MutationTypes } from '../store/mutation_types'
import { ActionTypes } from '../store/action_types'

export default defineComponent({
  name: 'CompositionAPIComponent',
  setup(props, context) {
    const store = useStore()

    const counter = computed(() => store.state.counter)
    const doubledCounter = computed(() => store.getters.doubledCounter)

    function resetCounter () {
      store.commit(MutationTypes.SET_COUNTER, 0)
    }

    async function getCounter () {
      const result = await store.dispatch(ActionTypes.GET_COUNTER, 256)
    }

    return () =>
      h('section', undefined, [
        h('h2', undefined, 'Composition API Component'),
        h('p', undefined, counter.value.toString()),
        h('button', { type: 'button', onClick: resetCounter }, 'Reset Counter')
      ])
  }
})
</script>

<style scoped>

</style>
