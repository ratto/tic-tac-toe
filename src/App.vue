<template>
  <div id="app">
    <b-container>
      <header class="pt-2">
        <h1>Tic-tac-toe</h1>
      </header>
      <GameBoard class="mt-4" />
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameBoard from './components/GameBoard.vue'

export default Vue.extend({
  name: 'App',
  components: {
    GameBoard
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
