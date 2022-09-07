<template>
  <div
    id="main"
    v-if="currentUser"
    class="account container d-flex justify-content-center align-items-center flex-column"
  >
    <h2 class="pb-5">MANAGE YOUR ACCOUNT</h2>
    <div id="UserCard" class="row w-100">
      <div
        class="col-md-6 d-flex justify-content-center gap-5 align-items-center flex-column"
      >
        <i id="userIcon" class="fa-solid fa-circle-user"></i>
        <div class="d-flex flex-column align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#userLogout"
            class="btn btn-grad"
          >
            Log Out
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#userDelete"
            class="btn btn-grad"
          >
            Delete Your Account
          </button>
        </div>
        <DeleteAccountModal />
        <LogOutModal />
      </div>
      <div class="col-md-6">
        <form @submit="updateUser">
          <div class="row mb-3">
            <div class="col-lg-6 mb-3 mt-4 mt-md-0">
              <label for="firstName" class="form-label">First Name</label>
              <input
                v-model="firstName"
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
                v-model="lastName"
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
              v-model="phoneNo"
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
              v-model="email"
              class="form-control"
              name="email"
              id="email"
              @input="changeEmailColor"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">New Password</label>
            <input
              type="text"
              v-model="userPassword"
              class="form-control"
              name="password"
              placeholder="Enter a New Passowrd"
              id="password"
              required
            />
          </div>
          <div>
            <div
              v-if="clicked"
              class="w-100 d-flex justify-content-center align-items-center gap-4"
            >
              <p class="m-0">Saving...</p>
              <div>
                <Loader :small="true" />
              </div>
            </div>
            <button v-else type="submit" class="w-100 mx-auto btn btn-grad">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    id="main"
    v-else
    class="account container d-flex justify-content-center align-items-center gap-4 flex-column"
  >
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
      <button class="btn btn-grad">Return to Login Page</button>
    </router-link>
  </div>
</template>

<script>
import DeleteAccountModal from "../components/DeleteAccountModal.vue";
import LogOutModal from "../components/LogOutModal.vue";
export default {
  components: {
    DeleteAccountModal,
    LogOutModal,
  },
  data() {
    return {
      id: null,
      firstName: null,
      lastName: null,
      gender: null,
      address: null,
      phoneNo: null,
      email: null,
      userPassword: null,
      clicked: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  async mounted() {
    if (this.currentUser) {
      this.id = this.$store.state.currentUser.id;
      this.firstName = this.$store.state.currentUser.firstName;
      this.lastName = this.$store.state.currentUser.lastName;
      this.phoneNo = this.$store.state.currentUser.phoneNo;
      this.email = this.$store.state.currentUser.email;
    }
    window.scrollTo(0, 0);
  },
  methods: {
    changeFirstNameColor() {
      if (this.firstName != this.$store.state.currentUser.firstName) {
        document.getElementById("firstName").style.background = "#d99";
      } else {
        document.getElementById("firstName").style.background = "#FFF";
      }
    },
    changeLastNameColor() {
      if (this.lastName != this.$store.state.currentUser.lastName) {
        document.getElementById("lastName").style.background = "#d99";
      } else {
        document.getElementById("lastName").style.background = "#FFF";
      }
    },
    changeEmailColor() {
      if (this.email != this.$store.state.currentUser.email) {
        document.getElementById("email").style.background = "#d99";
      } else {
        document.getElementById("email").style.background = "#FFF";
      }
    },
    changephoneNoColor() {
      if (this.phoneNo != this.$store.state.currentUser.phoneNo) {
        document.getElementById("phoneNo").style.background = "#d99";
      } else {
        document.getElementById("phoneNo").style.background = "#FFF";
      }
    },
    updateUser(e) {
      e.preventDefault();
      this.clicked = true;
      let newUser = {
        id: this.$store.state.currentUser.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNo: this.phoneNo,
        userPassword: this.userPassword,
      };
      this.$store.dispatch("updateUser", newUser);
      setTimeout(() => {
        this.clicked = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
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

#userIcon {
  font-size: 12rem;
}

::placeholder {
  opacity: 0.5;
}

#UserCard {
  box-shadow: 0 0 14px #eee;
  padding: 50px;
}

#genderLabel {
  width: 66px !important;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
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

@media screen and (max-width: 768px) {
  #main {
    padding-top: 20px;
  }
}
</style>
