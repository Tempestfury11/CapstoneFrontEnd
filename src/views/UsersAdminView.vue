<template>
  <div v-if="users" id="main" class="users container-fluid">
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
          <th scope="col">Delete</th>
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
          <th scope="row">
            <button class="btn-grad"
             id="delete"
               v-on:click="$store.dispatch('deleteUser', user.id)">
               <router-link to="/admin">Delete</router-link>
            </button>

          </th>
          <EditUserModal :user="user"></EditUserModal>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import EditUserModal from '../components/EditUserModal.vue';
export default {
    mounted() {
        this.$store.dispatch("getusers");
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    methods: {
      updateuser() {
            return this.$store.dispatch("updateuser", this.user);
        },
    },
    components: { EditUserModal }
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
</style>