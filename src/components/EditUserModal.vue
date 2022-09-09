<template>
    <button
              data-bs-toggle="modal"
              :data-bs-target="'#editUser' + user.id"
              class="btn-grad">
              Edit
            </button>

    <div class="modal fade" style="color:black !important;" :id="'editUser' + user.id" tabindex="-1" :aria-labelledby="EditLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content text-white">
              <div class="modal-header">
                  <h5 class="modal-title" :id=editUserLabel>Modal Title</h5>
                  <button type="button" :id="editUserClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
  
              <div class="modal-body">
                  <form method="PUT" @submit.prevent="updateuser">
                      <label class="form-label">ID</label>
                      <input type="number" class="form-control" :value="user.id" readonly>
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" v-model="user.firstName">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" v-model="user.lastName">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" v-model="user.email">
                      <label class="form-label">Phone Number</label>
                      <input type="number" class="form-control" v-model="user.phoneNo">
                      <label class="form-label">Password</label>
                      <input type="text" class="form-control" v-model="user.password">
                      <button 
                      @click="updateuser"
                      data-bs-dismiss="modal"
                      type="submit" class="btn btn-grad">Save Changes</button>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-grad" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props:['user'],
      methods:{
        updateuser(){
              this.$store.dispatch('updateuser', this.user);
          }
      }
  }
  </script>
  
  <style scoped>
  .modal-content{
      background-image: linear-gradient(
      to right,
      #000000 0%,
      #434343 51%,
      #000000 100%
    );
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