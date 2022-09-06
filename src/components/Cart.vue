<template>
  <a
    class="btn"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
  >
    <i class="fa-solid fa-cart-shopping"></i>
  </a>

  <div
    class="offcanvas offcanvas-start bg-dark"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <button class="btn btn-primary m-3" @click="this.$store.dispatch('clearCart')">Clear Cart</button><br>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body text-black">
      <div v-for="(products, index) in cart" :key="index">
        {{ products.title }}
        <span class="text-title text-black">R{{ products.price }}</span><br>
        {{ products.img }}
        <button class="btn btn-primary m-3" @click="this.$store.dispatch('deleteItem', products.cart_id)">
          Delete item
        </button>
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
    this.$store.dispatch("getCart");
  },
};
</script>

<style scoped></style>
