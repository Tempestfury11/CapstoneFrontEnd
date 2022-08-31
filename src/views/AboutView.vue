<template>
    <div id="main" class="margi">
      <div class="container marge text-center text-light">
        <h1>ABOUT US</h1>
        <div id="aboutus" class="container-fluid">
          <div id="aboutzone" class="row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-2">
            <div id="card" class="col-12 col-md-6 col-lg-6 col-xm-12 col-sm-6">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow img-fluid"
                      src="https://i.postimg.cc/TYpDSvQn/sushi1.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-light text-center">
                    <h1>MARSHALINO JANKOWSKI</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-light text-center role">
                      Aspiring Web Developer
                    </h2>
                  </div>
                  <div class="box">
                    <div>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <i class="fab fa-github text-light"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-linkedin-in text-light"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-instagram text-light"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-twitter text-light"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="card" class="col-12 col-md-6 col-lg-6 col-xm-12 col-sm-6">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow img-fluid"
                      src="https://i.postimg.cc/43fT7sdq/Templogo-removebg-preview.png"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-light text-center">
                    <h1>TEMPEST GAMING</h1>
                  </div>
                  <div class="mb-3">
                    <br>
                    <br>
                    <h2 class="text-uppercase text-light role">Our passion for all things Gaming and need to offer gamers a specialist store has always been our focus.
                    <br>
                    <br>
                    We love gaming and are gamers, and we insist on being knowledgeable and excited about the products we sell.
                    <br>
                    <br>
                    Today we offer a wide range of games, consoles, hardware, accessories and related merchandise, at competitive pricing.
                    </h2>
                  </div>
                  <div class="box">
                    <div>
                      <ul class="list-inline">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
#aboutus{
  padding: 50px 0 0 0;
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
.marg {
  margin-bottom: 10rem;
}
.marge {
  margin-bottom: 150px;
}
.h1,
h1 {
  font-size: 1.5rem;
}
#card{
  box-shadow: 0 0 20px #eee;
  border-radius: 1rem;
}
.card {
  background: transparent;
  box-shadow: 0 0 20px #eee;
  border: 1;
  border-radius: 1rem;
}
.img-hover-zoom--colorize img {
  border-radius: 10%;
  width: 150px;
  height: auto;
  margin-top: 20px;
  padding: 1px;
  transition: transform 0.5s;
  filter: grayscale(100%);
}
.img-hover-zoom--colorize:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}
.card h5 {
  overflow: hidden;
  height: 80px;
  font-weight: 300;
  font-size: 1rem;
}
.card h5 a {
  color: black;
  text-decoration: none;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab {
  font-size: 1.5rem;
  color: black;
  transition: transform 0.5s;
}
.fab:hover {
  color: black;
  transform: scale(1.1);
}
.card h2 {
  font-size: 1rem;
}
/* MEDIA */
@media only screen and (min-width: 1200px) {
  .img-hover-zoom--colorize img {
    width: 200px;
  }
}
@media only screen and (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
}
/* for headers */
section {
  padding: 60px 0;
  min-height: 100vh;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg-gray {
  background-color: #f9f9f9;
}
</style>