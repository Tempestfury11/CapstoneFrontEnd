<template>
  <div class="home">
    <div class="container justify-content-center">
      <img id="logo" class="img-fluid" src="https://i.postimg.cc/6qL4VBhv/Templogo-removebg-preview.png" alt="">
    </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/T1RjHFBW/wp2972942-xbox-4k-wallpapers.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/J7bFnB8p/wallpaperflare-com-wallpaper.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/PJR4pKFp/steam-wallpaper-by-alyama123-d9gsvdb-pre.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  background-image:url('https://i.postimg.cc/MZsP5fwK/Texture-Background-Dark-Spot-HD.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  padding: 100px 0;
  text-align: center;
}
.container{
  text-align: center;
  padding:100px;
}
#logo{
  text-align: center
}
</style>
