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
      <button class="btn btn-grad m-3" @click="this.$store.dispatch('clearCart')">Clear Cart</button><br>
      <button
        type="button"
        class="btn-close btn-grad"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body text-white">
      <div v-for="(products, index) in cart" :key="index">
        {{ products.title }}
        <span class="text-title text-black">R{{ products.price }}</span><br>
        <img :src="products.img" alt="">
        <button class="btn btn-grad m-3" @click="this.$store.dispatch('deleteItem', products.cart_id)">
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

<style scoped>
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

</style>
