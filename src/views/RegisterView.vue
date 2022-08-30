<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-6 col-md-6 col-sm-6">
          <h2 class="text-center">Register Your Account</h2>
          <div id="cardzone" class="card shadow text-dark">
            <div class="card-title text-center text-dark border-bottom">
              <h2>Register</h2>
            </div>
            <div class="card-body text-center text-dark">
              <form method="POST" @submit="registerUser">
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
                  <button type="submit" class="btn btn-grad">
                    Register
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
      firstName: null,
      lastName: null,
      email: null,
      phoneNo: null,
      password: null,
      cart: null,
    };
  },
  methods: {
    registerUser(event) {
      event.preventDefault();
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNo: this.phoneNo,
        email: this.email,
        password: this.password,
        cart: this.cart,
      };
      this.$store.dispatch("registerUser", user);
    },
  },
};
</script>

<style scoped>
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
#registerzone{
    padding: 0 0 70px 0
}
#cardzone {
  padding: 20px 50px;
  border-radius: 20px;
  background-color: transparent;
}
</style>