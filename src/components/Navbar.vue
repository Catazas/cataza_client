<template>
  <nav class="nav container">
    <router-link to="/" class="nav__logo">
      <img src="../assets/logo.png" alt="" class="nav__logo-img" />
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.container {
  max-width: 968px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.nav {
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.8rem;
}

.nav__logo-img {
  width: 11rem;
}
</style>
