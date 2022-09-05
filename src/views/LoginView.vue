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
                  <button type="submit" class="btn btn-grad">Login</button>
                </div>
                <div v-if="user">awsedrfghbnj</div>
                <div v-else>Loading...</div>
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
