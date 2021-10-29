<template>
  <div id="app">
    <header class="header">
      <Navbar />
    </header>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
  created() {
    document.title = 'Cataza | Belanja Ganja Murah';
  },
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background: #d7fbe8;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
