<template>
  <div id="main" class="product">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col justify-content-center">
          <div class="card justify-content-center">
            <div class="card-img">
              {{ game[0].category }}
            </div>
            <div class="card-info">
              <p class="text-title text-light">
                {{ game[0].description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col justify-content-right">
          <div class="card justify-content-center">
            <div class="card-img">
              <img id="image" class="img-fluid" :src="game[0].img" />
            </div>
            <div class="card-info">
              <p class="text-title text-light">
                {{ game[0].title }}
              </p>
            </div>
            <div class="card-footer">
              <div class="btn-container">
                <span class="text-title text-light">R{{ game[0].price }}</span>
                <button class="btn btn-grad">Add To Cart</button>
              </div>
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

#image {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

.card {
  width: 20vw;
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
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
    rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
  border: 1px solid #ffcaa6;
  background-color: #ffcaa6;
}
</style>
