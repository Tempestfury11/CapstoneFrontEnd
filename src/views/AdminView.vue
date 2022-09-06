<template>
  <div id="main" class="admin">
    <div class="container justify-content-center">
        <h2 class="text-white">WELCOME ADMINS</h2>
        <img class="img-fluid"
          id="logo"
          src="https://i.postimg.cc/SQt0Lk09/Templogo-removebg-preview.png"
          alt=""/>
          <br>
        <div class="container justify-content-center">
          <router-link :to="{name : 'adminUsers'}"><button class="btn btn">View Users</button></router-link>
          <router-link :to="{name : 'adminProducts'}"><button class="btn btn">View Products</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.btn{
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

.btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>