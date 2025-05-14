<template>
  <div class="app">
    <header class="app-header">
      <h1>Alberta Weather App</h1>
    </header>
    <main>
      <CityList />
    </main>
    <footer>
      <p>Created for UI Developer Interview</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CityList from './components/CityList.vue';

export default defineComponent({
  name: 'App',
  components: {
    CityList
  }
});
</script>

<style>
.app {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem 0;
}

main {
  flex: 1;
  padding: 2rem;
}

footer {
  background-color: #282c34;
  color: white;
  padding: 1rem 0;
}
</style>