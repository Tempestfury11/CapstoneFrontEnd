<template>
  <div id="main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div id="loginzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="text-center">Sign-in To Your Account</h2>
          <div id="cardzone" class="card shadow text-white">
            <div class="card-title text-center border-bottom">
              <h2 class="text-dark text-center">Login</h2>
            </div>
            <div class="card-body">
              <form method="PATCH" @submit="loginUser">
                <div class="mb-4 text-dark text-center">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="text"
                    required
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="mb-4 text-dark text-center">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    required
                    v-model="userPassword"
                    class="form-control"
                    name="password"
                  />
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-grad">
                    Login
                  </button>
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
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    loginUser(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginUser", user);
    },
  },
};
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}
.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
#main {
  background-image:url('https://i.postimg.cc/MZsP5fwK/Texture-Background-Dark-Spot-HD.jpg');
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
}
</style>
