<template>
  <div id="main" class="users container-fluid">
    <h1 class="text-white">All Users</h1>
    <div style="overflow-x:auto">
      <table class="table text-white">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Password</th>
          <th scope="col">Cart</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user">
          <th scope="row">{{ user.id }}</th>
          <th scope="row">{{ user.firstName}}</th>
          <th scope="row">{{ user.lastName}}</th>
          <th scope="row">{{ user.email }}</th>
          <th scope="row">{{ user.phoneNo}}</th>
          <th scope="row">{{ user.password }}</th>
          <th scope="row">{{ user.cart}}</th>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
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

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}

th, td {
  text-align: center;
  padding: 8px;
}
</style>