<template>
  <header class="header">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon bg-dark" for="menu-btn"
      ><img
        class="img-fluid"
        src="https://i.postimg.cc/Yqcq57t6/click-removebg-preview.png"
        width="35"
        height="35"
        alt="" /><span class="navicon"> </span
    ></label>
    <ul class="menu">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }"
          ><i class="bi bi-house-door-fill"></i>HOME</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }"
          ><i class="bi bi-file-person-fill"></i>ABOUT</router-link
        >
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'login' }"
          ><i class="fa-solid fa-door-closed"></i>LOGIN</router-link
        >
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'register' }"
          ><i class="fa-solid fa-pen"></i>REGISTER</router-link
        >
      </li>

      <li class="nav-item" v-if="user">
        <router-link v-if="user.userRole == 'admin'" :to="{ name: 'products' }"
          ><i class="fa-solid fa-gamepad"></i>PRODUCTS</router-link
        >
      </li>

      <li class="nav-item" v-if="user">
        <router-link v-if="user.userRole == 'admin'" :to="{ name: 'admin' }"
          ><i class="fa-solid fa-screwdriver-wrench"></i>ADMIN</router-link
        >
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'contact' }"
          ><i class="fa-solid fa-phone"></i>CONTACT</router-link
        >
      </li>

      <li class="nav-item" v-if="user != null">
        <button @click="this.$store.dispatch('logout')"><i class="fa-solid fa-power-off"></i>
        </button>
      </li>

      <li class="nav-item">
        <span id="cart">
          <Cart />
        </span>
      </li>
    </ul>
  </header>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  components: {
    Cart,
  },
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

<style>
a {
  color: white;
}
/* header */
.header {
  background-color: black;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: black;
}

.header li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  text-decoration: underline;
  color: white;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  /* float: right; */
  padding: 28px 20px;
  position: relative;
  user-select: none;
  background: white;
  background-color: white;
  color: red;
}

.header .menu-icon .navicon {
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 525px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
