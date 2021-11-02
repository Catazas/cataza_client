<template>
  <nav>
    <div class="container">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" class="nav__logo-img" />
      </router-link>
      <router-link to="/login">
        <button class="btn-user">Login</button>
      </router-link>
      <router-link to="/signup">
        <button class="btn-user">SignUp</button>
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Poppins:wght@400;500;600;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 968px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  height: 4rem;
  background-color: aquamarine;
  padding: 10px 20px;
}

.nav__logo-img {
  width: 7.5rem;
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
