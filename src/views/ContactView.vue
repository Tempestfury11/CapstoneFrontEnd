<template>
  <div id="main">
    <div class="container text-white">
      <h1 class="text-center">CONTACT US</h1>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form
          action="https://formspree.io/f/mvoleqaw"
          class="contact-form card"
          method="POST"
        >
          <p class="description text-white">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <div>
            <label for="Name">Name</label>
            <input
              type="text"
              name="name"
              class="form-control rounded mb-3 form-input"
              id="name"
              placeholder=""
              required
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control rounded mb-3 form-input"
              placeholder=""
              required
            />
          </div>
          <div>
            <label for="Message">Leave Us A Message</label>
            <textarea
              id="message"
              class="form-control rounded mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder=""
              required
            ></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input class="btn-grad" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

.contact-form-wrapper {
  padding: 20px 0;
}

.contact-form {
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 400px;
  background-color: transparent;
  box-shadow: 0 0 20px #eee;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: white;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: white;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: black;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: black;
}

.contact-form .form-control::-ms-input-placeholder {
  color: black;
}

.contact-form .title {
  text-align: center;
}

.contact-form .description {
  color: black;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px 60px;
}
</style>