<template>
  <div class="main">
    <div slider="center: true">
      <div class="position-relative visible-toggle" tabindex="-1">
        <ul
          class="slider-items child-width-1-2@s child-width-1-4@l child-width-1-4@m grid"
        >
          <li>
            <div class="panel container">
              <div class="box-container row">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="card col-md-4 col-lg-3 col-xm-12 col-sm-6 m-5"
                >
                  <div class="pic">
                    <img
                      :src="product.img"
                      alt="productImage"
                      id="item-img"
                      class="img-fluid image"
                    />
                  </div>
                  <div class="content">
                    <h3 class="title text-white">{{ product.title }}</h3>
                  </div>
                  <br />
                  <div class="row justify-content-center social text-center">
                    <div class="col-sm-6 text-center justify-content-center">
                      <router-link
                        :to="{ name: 'product', params: { id: product.id } }"
                      >
                        <button
                          id="adminButton"
                          class="justify-content-center text-center btn-grad btn"
                        >
                          View Product
                        </button>
                      </router-link>
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
.box-container .card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  background: transparent;
  box-shadow: 0 0 20px #eee;
}
.box-container .card:before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 0;
  transition: all 0.5s ease;
}
.box-container .card:hover .pic {
  width: 150px;
  height: 150px;
  margin-top: 50px;
  box-shadow: 0 0 20px #eee;
}
.box-container .card .pic {
  position: relative;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  overflow: hidden;
  transition: all 0.5s ease;
  background: #fff;
  box-shadow: 0 0 20px #eee;
}
.box-container .card .pic img {
  width: 100%;
  height: 100%;
}
.box-container .card .content {
  margin-top: 90px;
  text-align: center;
  padding: 0 30px;
  color: #2d3436;
  transition: margin-right 0.5s ease;
}
.box-container .card .content .title {
  margin-bottom: 0;
  font-family: "Yantramanav", sans-serif;
  font-size: 22px;
}
.box-container .card .content span {
  font-size: 12px;
  letter-spacing: 1.5px;
}
.box-container .card .content p {
  margin: 20px 0;
  font-size: 12px;
  line-height: 1.6;
  color: #b0b0b0;
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
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
