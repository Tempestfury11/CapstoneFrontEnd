<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="carttitile">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="cartmustang">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="mustangcart">
          <!-- <div > -->
          <div class="card" v-for="mustang in mustangcart" :key="mustang">
            <h2>
              {{ mustang.productName }}
            </h2>
            <a
              class="btn"
              @click="this.$store.dispatch('deleteFromcart', mustang)"
            >
              <i class="bi bi-trash3"></i>
            </a>
          </div>
  <button class="btn btn-primary" @click="this.$store.dispatch('clearCart')">Clear Cart</button>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["product_id"],
    computed: {
      mustangcart() {
        return this.$store.state.mustangs;
      },
    },
    mounted() {
      // this.$store.dispatch("getMustang", this.id)
    },
  };
  </script>
  <style>
  </style>