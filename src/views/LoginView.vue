<template>
  <div id="main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div id="loginzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="text-center text-light">Sign-in To Your Account</h2>
          <div id="cardzone" class="card text-white">
            <div class="card-title text-center border-bottom">
              <h2 class="text-light text-center">Login</h2>
            </div>
            <div class="card-body">
              <form method="POST" @submit.prevent="login">
                <div class="mb-4 text-light text-center">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="text"
                    required
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="mb-4 text-light text-center">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    required
                    v-model="password"
                    class="form-control"
                    name="password"
                  />
                </div>
                <div class="d-grid">
                  <button class="mt-3 b btn-layout" type="submit" onclick="this.classList.toggle('button--loading')"><span class="button__text">Login</span></button>
                </div>
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
    // insert empty object into form
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
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

#main {
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
  padding: 100px 0;
  text-align: center;
}
#loginzone {
  padding: 70px 0;
}
#cardzone {
  padding: 50px 50px;
  border-radius: 20px;
  background: transparent;
  box-shadow: 0 0 20px #eee;
}
</style>
