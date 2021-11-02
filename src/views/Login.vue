<template>
  <div class="login">
    <img class="img-background" src="../assets/images/bg-login.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  created() {
    document.title = 'Login | Cataza Indonesia';
  },
};
</script>

<style scoped>
.img-background {
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
