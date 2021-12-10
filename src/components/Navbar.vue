<template>
  <nav>
    <div class="container">
      <div class="wrapper__up">
        <a href="/">
          <img src="../assets/images/logo.png" alt="" class="nav__logo-img" />
        </a>
        <form class="container__form__search">
          <input class="input__search" type="text" placeholder="Search Product...." />
          <button class="btn__search" type="submit"><i class="bx bx-search"></i></button>
        </form>
        <i class="bx bx-cart-alt"></i>
        <div class="line__vertical"></div>
        <a href="/login">
          <button class="btn-user">Login</button>
        </a>
        <a href="/signup">
          <button class="btn-user">Sign Up</button>
        </a>
      </div>
      <div class="wrapper__down">
        <div class="menu__shop__category"><i class="bx bx-menu"></i><span>Shop By Category</span></div>
        <div class="container__voucher">
          <i class="bx bxs-bolt"></i>
          <span>Deals Today</span>
        </div>
        <div class="container__voucher"><i class="bx bxs-purchase-tag"></i> <span>Special Price</span></div>
        <div class="container__voucher"><i class="bx bxs-tv"></i> <span>Electronics</span></div>
        <div class="container__voucher">
          <i class="bx bxs-coupon"></i>
          <span>Shopping Vouchers</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');

/* BASE */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Header */
.container {
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
}

.wrapper__up {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
}

.wrapper__down {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav {
  height: fit-content;
  background-color: #ffa9f1;
  padding: 15px 45px;
  width: 100%;
}

.nav__logo-img {
  width: 156px;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-user {
  background-color: #d825bb;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  height: fit-content;
  font-size: 12px;
  color: white;
  padding: 10px 12px;
  font-weight: 700;
  width: 6.5rem;
}

.btn-user:hover {
  background-color: white;
  color: #d825bb;
  border: #d825bb solid 2px;
  cursor: pointer;
}

.container__form__search {
  display: flex;
  flex-direction: row;
}

.input__search {
  width: 545px;
  height: 33px;
  outline: none;
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 5px 12px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.btn__search {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d825bb;
  padding: 5px;
  width: 53px;
  height: 33px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}

.btn__search i {
  font-size: 20px;
  color: white;
  font-weight: 500;
}

.line__vertical {
  border-left: 2px solid #585757;
  height: 33px;
}

.bx-cart-alt {
  font-size: 33px;
  color: #585757;
}

/* Wrapper Down */
.menu__shop__category {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #d825bb;
  padding: 9px;
  border-radius: 10px;
  width: 13.5rem;
}

.menu__shop__category i {
  font-size: 25px;
  color: white;
}

.menu__shop__category span {
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: white;
}

.container__voucher {
  background-color: #7027a0;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  color: white;
  justify-content: space-around;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.container__voucher i {
  font-size: 20px;
}

.container__voucher span {
  margin-left: 10px;
  font-size: 14px;
}
</style>
