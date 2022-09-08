<template>
  <div class="main">
    <div slider="center: true">
      <div class="position-relative visible-toggle" tabindex="-1">
        <ul class="slider-items child-width-1-2@s child-width-1-4@l child-width-1-4@m grid"
        >
          <li>
            <div class="panel">
              <div class="box-container row">
                <div
                  class="col-sm-3"
                  v-for="(product, index) in products"
                  :key="index"
                >
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
                      <div class="btn-container">
                        <router-link
                          :to="{ name: 'product', params: { id: product.id } }"
                        >
                          <button class="btn btn-grad">View Product</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
a {
  text-decoration: none;
}
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

li {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
}
.box-container {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background: transparent;
  justify-content: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  overflow-x: scroll;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  text-decoration: none;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.main {
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
  text-align: center;
  align-content: center;
  justify-content: center;
}

.card {
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 0.8em;
  background: transparent;
  position: relative;
  overflow: visible;
  box-shadow: 0 0 20px #eee;
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
  text-align: center;
  align-content: center;
  justify-content: center;
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
  padding: auto;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
}

/*Hover*/
.card-img:hover {
  transform: translateY(-15%);
  /* box-shadow: 0 0 10px #eee; */
}
</style>
