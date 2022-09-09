<template>
<div id="main">
  <div v-if="user" class="container text-white">
    <div class="row">
      <div id="logout" class="row w-25">
          <button class="btn-grad" @click=reloadPage()> @LOGOUT</button>
      </div>
      <section>
          <div id="account" class="row">
              <hr>
              <h1>MY ACCOUNT</h1>
              <h2>Welcome back</h2>
              <h4>{{user.firstName}} {{user.lastName}}</h4>
          </div>
          <div class="row">
              <hr>
              <div id="orders" class="col-md-8">
                  <h3 class="orders">MY ORDERS</h3>
                  <h5>You haven't placed any orders yet
                  </h5>
              </div>
              <div id="address" class="col-md-4">
                  <h3>Edit Details</h3>
                  <h5>{{user.firstName}} {{user.lastName}}</h5>
                  <!-- <h5>{{user.province}}</h5>
                  <h5>{{user.country}}</h5> -->
                  <button class="btn-grad">EDIT ADDRESS</button>
              </div>
          </div>
      </section>
    </div>
  </div>
  <div v-else>
      <h1 class="text-center">Please Log in</h1></div>
</div>
</template>

<script>
export default {
  computed: {
      user() {
          return this.$store.state.user;
      },
  },
  // components: { Footer },
  methods: {
      reloadPage() {
          window.location.reload();
      }
  }
}
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

.container {
  position: relative;
  top: 3rem;
}

h3 {
  margin-block: 1rem;
}

.orders {
  width: 20rem;
}

#orders {
  height: 15rem;
}

#address {
  height: 15rem;
}

button {
  margin: 0 auto;
  font-size: 1rem;
  padding: 1rem 2rem;
  background-color: white;
  border: 1px solid transparent;
  color: white;
  font-weight: 300;
  width: 100%;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: white;
  color: white;
  border-color: white;
}
</style>