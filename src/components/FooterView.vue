<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Find us</h4>
                <span>38 Belgravia Road, Athlone</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Call us</h4>
                <span>061 844 5578</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Mail us</h4>
                <span>info@Tempestgaming.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="/"
                  ><img
                    src="https://i.postimg.cc/cCMbqXQd/Tempest-Logo-removebg-preview.png"
                    class="img-fluid"
                    alt="logo"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">Our Services</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
              <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
              <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
            </div>
            <div class="footer-widget">
              <div class="footer-text">
                <p>
                  TEMPEST GAMING stocks the widest range of Gaming equipment in South
                  Africa, sourced from major international and local brands. We
                  have a huge selection of pc and console gear at
                  competitive prices
                </p>
              </div>
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2022, All Right Reserved
                  <a href="#">TEMPEST GAMING</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: transparent;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid black;
}
.single-cta i {
  color: red;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: black;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: black;
  line-height: 28px;
}
.footer-social-icon span {
  color: black;
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: black;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: black;
  color: red;
}
.twitter-bg {
  background: black;
  color: red;
}
.google-bg {
  background: black;
  color: red;
}
.facebook-bg:hover  {
  background: red;
  color: black;
}
.twitter-bg:hover  {
  background: red;
  color: black;
}
.google-bg:hover  {
  background: red;
  color: black;
}
.footer-widget-heading h3 {
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: red;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: red;
}
.footer-widget ul li a {
  color: black;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: black;
  border: 1px solid red;
  color: black;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: red;
  padding: 13px 20px;
  border: 1px solid red;
  top: 0;
}
.subscribe-form button i {
  color: black;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: transparent;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: black;
}
.copyright-text p a {
  color: red;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: red;
}
.footer-menu li a {
  font-size: 14px;
  color: red;
}
</style>
