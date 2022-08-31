<template>
  <div id="main" class="products container-fluid">
    <h1 class="text-light">All Products</h1>
      <div style="overflow-x:auto">
            <table class="table text-white">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Image</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">
            <button
              data-bs-target="#AddProductModal"
              data-bs-toggle="modal"
              class="btn-grad"
            >
              ADD
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <th scope="row">{{ product.title }}</th>
          <th scope="row">{{ product.img }}</th>
          <th scope="row">{{ product.description }}</th>
          <th scope="row">R{{ product.price }}</th>
          <th scope="row">
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.id"
              class="btn-grad"
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#deleteProduct` + product.id"
              class="btn-grad"
            >
             Delete
            </button>
          </th>
          <EditProductModal :product="product" />
          <DeleteProductModal :product="product" />
        </tr>
      </tbody>
    </table>
      </div>
    <AddProductModal />
  </div>
</template>

<script>
import EditProductModal from "../components/EditProductModal";
import DeleteProductModal from "../components/DeleteProductModal.vue";
import AddProductModal from "../components/AddProductModal.vue";

export default {
  components: { EditProductModal, DeleteProductModal, AddProductModal },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    allProducts() {
      return this.$store.state.products;
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
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}

th, td {
  text-align: center;
  padding: 8px;
}
</style>