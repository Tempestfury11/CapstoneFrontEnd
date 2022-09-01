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