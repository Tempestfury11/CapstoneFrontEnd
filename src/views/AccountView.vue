<template>
  <div id="main">
    <div v-if="user" class="container text-white">
      <div class="row">
        <div id="account">
          <h2>Welcome back</h2>
          <h4>{{ user.firstName }} {{ user.lastName }}</h4>
          <form @submit="updateUser">
            <div class="row mb-3">
              <div class="col-lg-6 mb-3 mt-4 mt-md-0">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  v-model="user.firstName"
                  type="text"
                  class="form-control"
                  name="firstName"
                  id="firstName"
                  @input="changeFirstNameColor"
                />
              </div>
              <div class="col-lg-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  v-model="user.lastName"
                  class="form-control"
                  name="lastName"
                  id="lastName"
                  @input="changeLastNameColor"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="phoneNo" class="form-label">Phone Number</label>
              <input
                v-model="user.phoneNo"
                type="number"
                class="form-control"
                name="phoneNo"
                id="phoneNo"
                @input="changephoneNoColor"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                name="email"
                id="email"
                @input="changeEmailColor"
              />
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div
                    v-if="clicked"
                    class="w-50 d-flex justify-content-center align-items-center gap-4"
                  >
                    <p class="m-0">Saving...</p>
                    <div>
                      <Loader :small="true" />
                    </div>
                  </div>
                  <div>
                    
                  </div>
                  <EditUserModal :user="user"></EditUserModal>
                              <button class="btn-grad"
             id="delete"
               v-on:click="$store.dispatch('deleteUser', user.id)">
               <router-link to="/admin">Delete</router-link>
            </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-center text-white">Please Log in</h1>
    </div>
  </div>
</template>

<script>
import EditUserModal from '../components/EditUserModal.vue';
export default {
  props:['user'],
  components:{
    EditUserModal
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
        editUser() {
            return this.$store.dispatch("editUser", this.user);
        },
    },
};
</script>

<style scoped>
#logout {
  padding: 0 0 75px 0;
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
  width:110px;
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
