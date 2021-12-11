<template>
  <div class="signup">
    <div class="bg__description">
      <img src="../assets/images/logo.png" alt="Logo" class="img__logo" />
      <div class="neon">#1 Catalog Belanja Murah</div>
      <img src="../assets/images/bg-signup.svg" alt="Catalog" class="img__svg" />
    </div>
    <div class="wrapper">
      <div class="form__container">
        <button class="btn-hover color-3">
          <a href="/"><i class="bx bx-arrow-back"></i> Back to Home</a>
        </button>
        <span class="text__header">Sign Up</span>
        <form @submit="handleSignUp">
          <label for="fullname">Full Name</label>
          <input v-model="fullname" type="text" placeholder="Input Your Name" />
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Input Your Username"
          />
          <label for="email">Email</label>
          <input v-model="email" type="email" placeholder="Input Your Email" />
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Input Password min 8-digit"
          />
          <div class="btn__submit">
            <input class="color-9" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  created() {
    document.title = 'SignUp | Cataza Indonesia';
  },
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignUp(e) {
      e.preventDefault();

      const payload = {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("register", payload)
        .then(({ data }) => {
          console.log(data);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

/* Base */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.signup {
  height: 125vh;
  background: #150050;
  display: flex;
  padding: 60px 60px 40px 60px;
}

a {
  text-decoration: none;
}

a:visited {
  color: white;
}

label {
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #2f86a6;
}

form {
  display: flex;
  flex-direction: column;
}

/* Structure */
.bg__description {
  width: 100%;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Style Section Description */
.img__logo {
  width: 230px;
  margin-bottom: 55px;
}

.txt__description {
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  color: #2f86a6;
  text-decoration: underline #34be82;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 70px;
}

.img__svg {
  width: 85%;
}

.neon {
  animation: neonAnim 2s alternate-reverse infinite;
  color: #99feff;
  font-family: 'Montserrat', sans-serif;
  font-size: 34px;
  margin-bottom: 5rem;
  font-weight: 700;
}
@keyframes neonAnim {
  from {
    text-shadow: 0 0 10px rgba(153, 254, 255, 0.7), 0 0 40px rgba(153, 254, 255, 0.7), 0 0 100px rgba(153, 254, 255, 0.7);
  }
  to {
    text-shadow: 0 0 5px rgba(153, 254, 255, 0.7), 0 0 20px rgba(153, 254, 255, 0.7), 0 0 60px rgba(153, 254, 255, 0.7);
  }
}
/* Style Section Form */
.form__container {
  background-color: white;
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px 55px;
}

.text__header {
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #6166b3;
  text-decoration: underline #17d7a0;
  font-weight: 700;
  margin-bottom: 40px;
}

.btn-hover {
  width: fit-content;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin-bottom: 35px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  padding: 10px;

  border-radius: 50px;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-3 {
  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

input[type='text'],
input[type='password'],
input[type='email'] {
  margin-bottom: 25px;
  border-radius: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  height: 40px;
  padding: 10px;
  outline: none;
  border: #1db9c3 solid 2px;
}

.btn__submit {
  display: flex;
  justify-content: center;
}

input[type='submit'] {
  width: 100%;
  text-align: center;
  padding: 13px 0;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}

input[type='submit']:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
}

input[type='submit']:focus {
  outline: none;
}

input[type='submit'].color-9 {
  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
</style>
