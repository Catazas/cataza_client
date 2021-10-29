<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <i class="bx bx-face"></i>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  created() {
    document.title = 'Cataza | Belanja Ganja Murah';
  },
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
