<template>
  <div class="main">
    <div class="container">
      <div id="search" class="row justify-content-center text-center">
        <div class="col-md-2">
          <input
            type="text"
            placeholder="Search..."
            v-model="search"
            class="form-control mb-5"
            id="drops"
          />
        </div>
        <div class="col-md-2">
          <select
            class="form-select"
            @change="sortPrice"
            name=""
            id="drops"
            v-model="price"
          >
            <option id="drops" value="" selected disabled>Sort by Price</option>
            <option id="drops" value="asc">Lowest to Highest</option>
            <option id="drops" value="desc">Highest to Lowest</option>
          </select>
        </div>
      </div>

      <div v-if="products">
        <div class="row justify-content-center">
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
                  <span class="text-title text-light"
                    >R{{ product.price }}</span
                  >
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      price: "",
    };
  },
  mounted() {
    this.$store.dispatch("getproducts");
    this.$store.dispatch("getproduct");
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    sortPrice() {
      let sort = this.price;

      if (sort === "asc") {
        this.$store.state.products.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sort === "desc") {
        this.$store.state.products.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
  },
};
</script>

<style scoped>
#drops{
  background-color: #434343 ;
  color: white
}
#search{
  padding: 0 0 50px 0;
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
  width: 150px;
  height: 150px;
  border-radius: 10px;
  /* object-fit: cover */
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
  padding: 200px 0;
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
