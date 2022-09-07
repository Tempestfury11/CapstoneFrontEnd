<template>
  <div id="main" class="product">
    <div class="container-fluid" v-if="product">
      <div class="row row vh-100 d-flex justify-content-center align-content-center">
          <div class="card justify-content-center">
            <div class="card-img">
              <img id="image" class="img-fluid" :src="product[0].img" />
            </div>
            <div class="card-info">
              <p class="text-title text-light">
                {{ product[0].description }}
              </p>
            </div>
            <div class="card-footer">
              <div class="btn-container">
                <span class="text-title text-light">R{{ product[0].price }}</span>
                <button class="btn btn-grad" @click="this.$store.dispatch('addToCart', {id: product[0].id})">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getproduct", this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
#main {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  text-align: center;
}
.btn-container {
  text-align: center;
  align-content: center;
  justify-content: center;
}
a {
  text-decoration: none;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.card {
  width: 350px;
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 25px;
  background: transparent;
  position: relative;
  overflow: visible;
  box-shadow: 0 0 20px #eee;
}

.card-img {
  background-color: transparent;
  height: 50%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}

/* .card-info {
  padding-top: 10%;
} */

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  /* border-top: 2px solid white; */
  text-align: center;
  align-content: center;
  justify-content: center;
}

/* .text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
} */

.text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}
</style>
