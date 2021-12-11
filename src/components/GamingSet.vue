<template>
  <div class="container-gaming-set">
    <div class="font-gaming-set">
      <h2>Gaming Set</h2>
      <span>See All</span>
    </div>
    <div class="wrapper-gaming-set">
      <span class="arw-right"><i class="bx bxs-chevron-right"></i></span>
      <div class="box-gaming-set">
        <img class="img-box" src="../assets/images/headsetgaming.png" alt="Headset" />
        <div class="box-body-gaming-set">
          <h2>Headset Gaming Jetex</h2>
          <h4>Rp. 670.000</h4>
          <span><i class="bx bx-map"></i>Jakarta</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GamingSet',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.container-gaming-set {
  width: 100%;
  margin-top: 30px;
}

.font-gaming-set {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
}
.font-gaming-set h2 {
  font-size: 20px;
  color: black;
  font-weight: 700;
}

.font-gaming-set span {
  font-size: 16px;
  color: #d825bb;
  font-weight: 700;
}

.wrapper-gaming-set {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img-box {
  width: 100%;
}

.box-gaming-set {
  box-shadow: 1px 1px 13px -5px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 160px;
  height: 300px;
  max-height: 300px;
  max-width: 160px;
  outline: grey;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box-body-gaming-set {
  padding: 7px 15px;
  display: flex;
  flex-direction: column;
}

.box-gaming-set h2 {
  font-size: 18px;
  color: #c32bad;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.box-gaming-set h4 {
  font-size: 14px;
  color: #f56fad;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

.arw-right {
  position: absolute;
  right: 0;
  transform: translateX(-50%);
  padding: 5px;
  border-radius: 50%;
  background-color: #d825bb;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bxs-chevron-right {
  color: white;
  font-size: 30px;
}
</style>
