<template>
  <div class="container-deals-today">
    <div class="font-deals-today">
      <h2>Deals Today</h2>
      <span>See All</span>
    </div>
    <div class="wrapper-deals-today">
      <span class="arw-right"><i class="bx bxs-chevron-right"></i></span>
      <div class="box-item-deals">
        <!-- <img src="../assets/images/shoes.png" alt="Product Details" class="img-details" /> -->
        <span v-for="(product, index) in products" :key="index" class="title-product">{{ product.titleProduct }}</span>
        <span class="cost-product">IDR. 125K</span>
        <span class="cost-discount">IDR. 150K</span>
        <span class="address">Jakarta</span>
      </div>
    </div>
  </div>
</template>
<script>
import { dummyProduct } from '../data';
export default {
  name: 'DealsToday',
  data() {
    return {
      products: '',
    };
  },
  methods: {
    getproduct() {
      this.products = dummyProduct.titleProduct;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.container-deals-today {
  width: 100%;
  margin-top: 30px;
}

.font-deals-today {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.font-deals-today h2 {
  font-size: 20px;
  color: black;
  font-weight: 700;
}

.font-deals-today span {
  font-size: 16px;
  color: #d825bb;
  font-weight: 700;
}

.wrapper-deals-today {
  width: 100%;
  background-color: #ffa9f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
}

.box-item-deals {
  background-color: white;
  width: 160px;
  height: 160px;
  max-height: 160px;
  max-width: 160px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  flex-wrap: wrap;
}

.img-details {
  width: 85%;
}
</style>
