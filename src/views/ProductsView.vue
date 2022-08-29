<template>
  <div class="products">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div id="card" v-for="(product, index) in products" :key="index">
                    <div class="card">
                    <p>{{ product.title }} </p>
                    <p><span></span> R{{ product.price }}</p>
                    <p>{{product.category}}</p>
                    <p>{{ product.description }}</p>
                    <img class="img-fluid" :src="product.img"/>
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
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
}
</script>

<style>

</style>