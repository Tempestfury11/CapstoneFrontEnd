<template>
  <div id="main" class="product">
    <div class="container justify-center align-center">
      <div class="row justify-center align-center">
        <div class="col justify-center align-center">
          <div class="card justify-center align-center" >
            <p class="title">{{ game[0].title }}</p>
            <div class="pricecontainer">
              <p class="pricedescriptor"><img id="image" class="img-fluid" :src="game[0].img" /></p>
              <p class="price">R{{ game[0].price}}</p>
            </div>
            <p class="includes">{{game[0].category}}</p>
            <ul class="benefitlist">
              <p>{{ game[0].description}}</p>
            </ul>
            <div class="btncontainer">
              <button>Select This Plan</button>
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
    game() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
#main {
  background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  text-align: center;
}

.card {
  width: 380px;
  height: 508px;
  background: rgb(45, 45, 45);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition-duration: 0.5s;
}
.title {
  text-align: center;
  margin-top: 0.5em;
  font-weight: bold;
  font-size: x-large;
  color: rgb(200, 200, 200);
}
.pricecontainer {
  width: 100%;
  /* margin-top: 0.7em; */
  background-color: rgb(30, 30, 30);
  box-shadow: inset 0px 0px 2em rgba(0, 0, 0, 0.3);
}

.price {
  text-align: center;
  color: rgb(180, 180, 180);
  font-size: x-large;
  font-weight: bold;
  /* padding: 0.75em 0 0 0; */
}

.pricedescriptor {
  text-align: center;
  color: rgb(118, 118, 118);
  font-size: medium;
  /* padding: 0 0 1em 0; */
}

.includes {
  text-align: center;
  color: rgb(110, 110, 110);
  margin-top: 0.6em;
  font-size: medium;
  font-weight: bold;
}

.benefitlist li {
  color: rgb(150, 150, 150);
  font-size:xx-small;
  text-align: center;
}


.btncontainer {
  text-align: center;
}

.btncontainer button {
  margin-top: 1em;
  padding: 0.5em 0.8em 0.5em 0.8em;
  border-style: none;
  border-radius: 1000000px;
  color: rgb(239, 239, 239);
  font-weight: bold;
  background-image: linear-gradient(45deg, #fe4fe1 0%, #3f00fe 100%);
  transition: box-shadow 0.15s ease-in-out;
}

.btncontainer button:hover {
  box-shadow: inset 0px 0px 5px rgb(0, 0, 0);
  transition: box-shadow 0.15s ease-in-out;
}
</style>
