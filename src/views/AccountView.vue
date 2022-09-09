<template>
<div id="main">
  <div class="background">
  <div class="container">
    <div>
        <div class="row">
            <div class="col-md-6">
                <img class="mx-auto img-fluid rounded-circle" :src="user.userProfile" alt="" id="user">
                <h2>
                    User: {{user.firstName}}
                </h2>
            </div>
            <div class="col-md-6">
                <form id="userForm">
                                <!-- name -->
              <div class="mb-3">
                <label for="Name" class="form-label">User Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="user.firstName"
                  name="addName"
                  id="addName"
                  placeholder="user Name"
                  required
                />
              </div>
             <!-- surname -->
              <div class="mb-3">
                <label for="Name" class="form-label">User surname:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="user.surName"
                  name="addSurnmae"
                  id="addSurname"
                  placeholder="user Surname"
                  required
                />
              </div>
            <!-- email -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Email</label>
                <input
                  class="form-control"
                  type="text"
                  name="edit email"
                  id="edit email"
                  v-model="user.email"
                  placeholder="Email"
                />
              </div>
            <!-- Profile picture -->
              <div class="mb-3">
                <label for="addPrice" class="form-label"
                style="border-radiuse:20%;">Profile picture url</label>
                <input
                  class="form-control"
                  type="text"
                  name="edit email"
                  id="edit profile"
                  v-model="user.userProfile"
                  placeholder="profile picture url"
                />
              </div>
               <!-- <div class="col-6">
                <img src="https://i.postimg.cc/TPNnfPqV/plchldr798automanager.png" alt="">
               </div> -->
              <button type="button"
              class="btn btn-light"
              @click="this.$store.dispatch('editUser', user)">
              Update Details</button>
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
  props: ["product_id"],
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUser")
  },
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
</style>