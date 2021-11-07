<template>
  <div class="home">
    <header>
      <Navbar />
    </header>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  created() {
    document.title = 'Cataza | Jual Beli Ganja Murah';
  },
  components: {
    Navbar,
  },
};
</script>
