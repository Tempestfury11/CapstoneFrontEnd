<template>
  <div class="home">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.postimg.cc/QxQmnPLL/HD-Xbox-Pictures.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/mrNHyxKk/playstation-black-minimalism-upjwt5g9jxxearij.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/KcJvrczC/steam.png"
            class="d-block w-100"
            alt=""
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/FH8swPXv/419788.jpg" class="card-img-top" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/QxKz0Sm1/702620.png" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/CK5rnNRR/595712.jpg" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/ZndWD101/mirage.png" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/8k6m7CbB/suicidesquad.png" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/Jnbw6xMp/starwars.png" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.postimg.cc/sX9fL7r4/stateofdecay.png" class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
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
.container {
  text-align: center;
  padding: 100px;
}
#logo {
  text-align: center;
}
.d-block{
  height:750px;
  width:750px;
}
</style>
