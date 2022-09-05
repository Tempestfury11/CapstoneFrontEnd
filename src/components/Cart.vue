<template>
<a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <i class="fa-solid fa-cart-shopping"></i>
</a>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-black">
    <div v-for="(products, index) in products" :key="index">
      {{products.productData[0].title}}
      <span class="text-title text-black">R{{ product[0].price }}</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ["product_id"],
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style scoped></style>
