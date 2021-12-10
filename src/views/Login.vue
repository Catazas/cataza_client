<template>
  <div class="login">
    <div class="wrapper fadeInDown">
      <div class="box__container">
        <div class="top__font">
          <h2 class="top_one_font fadeIn first">Doesn't have an account yet?</h2>
          <a href="/signup" class="top_two_font fadeIn first">Register</a>
        </div>
        <form>
          <div class="submit__form">
            <label class="fadeIn second">Username atau Email</label>
            <input class="fadeIn second" type="text" placeholder="ID" />
            <label class="fadeIn third">Password</label>
            <input class="fadeIn third" type="password" placeholder="Password" />
          </div>
          <div class="txt__forget">
            <h2 class="fadeIn fourth">Forgot Password?</h2>
          </div>
          <div class="btn__submit">
            <input class="fadeIn fourth" type="submit" value="LOGIN" />
          </div>
        </form>
        <div class="or__signin">
          <hr color="black" size="1" width="20%" />
          <h2>or login with</h2>
          <hr color="black" size="1" width="20%" />
        </div>
        <div class="btn__google">
          <button type="button" class="fadeIn fourth login-with-google-btn">Sign in with Google</button>
        </div>
      </div>
    </div>
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

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@700&family=Quicksand:wght@700&family=Roboto:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  height: 110vh;
  background: url('../assets/images/bg-login-new.png') no-repeat;
  background-size: 100%;
}

a {
  text-decoration: none;
}

/* Top Font Daftar */
.top__font {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.top_one_font {
  font-size: 20px;
  margin-right: 7px;
  font-family: 'Quattrocento Sans', sans-serif;
}

.top_two_font {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #d825bb;
  text-transform: uppercase;
  cursor: pointer;
}

/* Form */
.submit__form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.submit__form label {
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 24px;
  margin-bottom: 6px;
}

input[type='text'],
input[type='password'] {
  padding: 12px;
  border: #c5b6ae solid 3px;
  border-radius: 15px;
  font-family: 'Quicksand', sans-serif;
  outline: none;
  box-shadow: 0 3px 4px grey;
}

.btn__submit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
}

input[type='submit'] {
  padding: 12px 50px;
  border-radius: 15px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: white;
  outline: none;
  background-color: #d825bb;
  box-shadow: 0 3px 4px grey;
  cursor: pointer;
}

.submit__form label:nth-child(3) {
  margin-top: 40px;
}

.txt__forget {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.txt__forget h2 {
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 20px;
}

.or__signin {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.or__signin h2 {
  font-size: 24px;
  font-family: 'Quattrocento Sans', sans-serif;
}

/* Structure */
.wrapper {
  width: 100%;
  min-height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.box__container {
  border-radius: 15px;
  background: #fff;
  width: 90%;
  max-width: 519px;
  position: relative;
  padding: 15px 20px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
}

/* Animation */
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.fadeIn.first {
  animation-delay: 0.4s;
}

.fadeIn.second {
  animation-delay: 0.6s;
}

.fadeIn.third {
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  animation-delay: 1s;
}

/*  Google Button */
.btn__google {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.login-with-google-btn {
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  border: #c5b6ae solid 2px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: #fff5f5;
  background-repeat: no-repeat;
  background-position: 12px 11px;
}

.login-with-google-btn:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
