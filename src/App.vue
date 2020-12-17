<template>
  <section id="app">
    <h1>Counter</h1>
    <CompositionAPIComponent></CompositionAPIComponent>
    <OptionsAPIComponent></OptionsAPIComponent>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompositionAPIComponent from './components/CompositionAPIComponent.vue'
import OptionsAPIComponent from './components/OptionsAPIComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    CompositionAPIComponent,
    OptionsAPIComponent
  }
})

</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>


<!-- hello app.vue
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

-->
