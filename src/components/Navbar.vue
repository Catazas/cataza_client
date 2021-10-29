<template>
  <nav class="nav container">
    <router-link to="/">
      <img src="../assets/logo.png" alt="" class="nav__logo-img" />
    </router-link>
    <router-link to="/login">
      <button class="btn-user">Signin</button>
    </router-link>
    <router-link to="/signup">
      <button class="btn-user">SignUp</button>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Poppins:wght@400;500;600;900&display=swap');

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

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-user {
  background-color: #62d2a2;
  border-radius: 25px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.765rem;
  color: white;
  padding: 6px 13px;
}

.btn-user:hover {
  background-color: aqua;
}
</style>
