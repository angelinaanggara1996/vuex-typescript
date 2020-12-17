<template>
  <section>
    <h2>Options API Compont</h2>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset Counter</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MutationTypes } from '../store/mutation_types'
import { ActionTypes } from '../store/action_types'

export default defineComponent({
  name: 'OptionsAPIComponent',
  computed: {
    counter: {
      get() {
        return this.$store.state.counter
      },
      set(value: number) {
        this.$store.commit(MutationTypes.SET_COUNTER, value)
      },
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter
    },
  },
  methods: {
    resetCounter() {
      this.$store.commit(MutationTypes.SET_COUNTER, 0)
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUNTER, 256)
    },
  },
)}
</script>

<style scoped>

</style>
