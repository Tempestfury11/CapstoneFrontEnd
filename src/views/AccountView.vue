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
</template>