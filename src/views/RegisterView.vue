<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-6 col-md-6 col-sm-6">
          <h2 class="text-center text-light">Register Your Account</h2>
          <div id="cardzone" class="card text-light">
            <div class="card-title text-center text-light border-bottom">
              <h2>Register</h2>
            </div>
            <div class="card-body text-center text-light">
              <form method="POST" @submit.prevent="register">
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    v-model="firstName"
                    type="text"
                    class="form-control"
                    name="firstName"
                  />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    name="lastName"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="phoneNumber" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    v-model="phoneNo"
                    type="tel"
                    class="form-control"
                    name="phoneNo"
                    maxlength="10"
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    name="password"
                  />
                </div>
                <div class="d-grid">
                  <button class="mt-3 b btn-layout" type="submit" onclick="this.classList.toggle('button--loading')"><span class="button__text">Register</span></button>
                </div>
                <h1 v-if="this.$store.state.msg != null">{{this.$store.state.msg}}</h1>
              </form>
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
      firstName: null,
      lastName: null,
      email: null,
      phoneNo: null,
      password: null,
      cart: null,
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNo: this.phoneNo,
        password: this.password,
      });
  }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
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
/* button loader */

.button__text {
  font: bold 20px "Quicksand", san-serif;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: black;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

/* button */
button {
  text-align: center;
}

.btn-layout,
.b {
  text-align: center;
  margin: 0 5px 0 0;
  position: relative;
  opacity: 0.999;
  padding: 8px 8px;
  text-align: center;
  background-color: rgb(29, 26, 26);
  color: white;
  border-radius: 3px;
  border: none;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  overflow: hidden;
}

.b:before {
  text-align: center;
  transition: all 0.3s ease-in-out;
  content: "";
  width: 0;
  height: 100%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  left: 0;
  top: 0;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  z-index: -1;
}

.b:hover:before {
  color: rgb(0, 0, 0);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  width: 100%;
  left: auto;
  right: 0;
}

.btn-layout:hover {
  color: rgb(0, 0, 0);
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 20px 3px black;
}

#registerzone{
    padding: 0 0 70px 0
}
#cardzone {
  padding: 20px 50px;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 20px #eee;
}

</style>