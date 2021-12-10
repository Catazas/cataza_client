<template>
  <div class="home">
    <header>
      <Navbar />
    </header>
    <div class="container">
      <img src="../assets/images/banner-slide.png" alt="Banner" class="img-banner" />
      <DealsToday />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import DealsToday from '@/components/DealsToday.vue';

export default {
  name: 'Home',
  created() {
    document.title = 'Cataza | #1 Catalog Belanja Murah';
  },
  components: {
    Navbar,
    DealsToday,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
/* BASE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
}

/*  Banner */
.img-banner {
  width: 100%;
}
</style>
