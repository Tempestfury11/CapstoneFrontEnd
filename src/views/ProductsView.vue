<template>
  <div class="main">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-4" v-for="(product, index) in products" :key="index">
          <div class="card">
            <div class="card-img">
              <img id="image" class="img-fluid" :src="product.img" />
            </div>
            <div class="card-info">
              <p class="text-title text-light">
                {{ product.title }}
              </p>
            </div>
            <div class="card-footer">
              <span class="text-title text-light">R{{ product.price }}</span>
              <router-link
                :to="{ name: 'product', params: { id: product.id } }"
              >
              <button class="btn-grad">View Product</button>
              </router-link>
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
    this.$store.dispatch("getproducts");
    this.$store.dispatch("getproduct");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  margin: 10px;
  /* padding: 15px 45px; */
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

#image {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}
.main {
  background-image: url("https://i.postimg.cc/MZsP5fwK/Texture-Background-Dark-Spot-HD.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  padding-left: 100px;
  text-align: center;
  justify-content: center;
}

.card {
  width: 20vw;
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 0.8em;
  background: transparent;
  position: relative;
  overflow: visible;
}

.card-img {
  background-color: transparent;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}

.card-info {
  padding-top: 10%;
}

svg {
  width: 20px;
  height: 20px;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 2px solid white;
}

/*Text*/
.text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}

/*Button*/
.card-button {
  border: 1px solid white;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
}

/*Hover*/
.card-img:hover {
  transform: translateY(-15%);
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
    rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
  border: 1px solid #ffcaa6;
  background-color: #ffcaa6;
}
</style>
