<template>
  <div id="contact" class="section">
    <h2>Let's chat</h2>
    <div class="contact-main">
      <div class="intro">
        <p>Feel free to drop me a line! If you're interested in working with me, please provide as much information as you possibly can about your project.</p>
        <div class="contact-img">
          <img src="@/assets/img/contact.jpg" alt="email">
        </div>
      </div>

      <div class="form">
        <form id="contact-form" ref="contact-form">
          <div class="col-md-6 mb-3 text-left">
            <label for="name" class>Name</label>
            <input type="text" class="form-control" id="name" placeholder="Full name" required>
          </div>
          <div class="col-md-6 mb-3 text-left">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="example@domain.com"
              required
            >
          </div>
          <div class="col-md-12 mb-3 text-left">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Subject" required>
          </div>

          <div class="col-md-12 mb-3 text-left">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <div class="button">
            <div class="button-effect"></div>
            <button @click="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    submit() {
      debugger;
      let data = {
        name: this.$refs["contact-form"].name.value,
        email: this.$refs["contact-form"].email.value,
        subject: this.$refs["contact-form"].subject.value,
        messaje: this.$refs["contact-form"].message.value
      };
      emailjs.send("gmail", "template_furTsNLf", data).then(
        function(response) {
          if (response.text === "OK") {
            alert("El correo se ha enviado con éxito");
          }
          console.log(
            "SUCCESS. status=%d, text=%s",
            response.status,
            resonse.text
          );
        },
        function(err) {
          console.log("FAILDED. error=", err);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
#contact {
  background: var(--fifth-color);
}
.contact-main {
  display: flex;
  flex-wrap: wrap;
  color: var(--second-color);
  max-width: 1000px;
  width: 100%;
  margin: 30px auto 0;
}
.intro {
  width: 100%;
  @include media-breakpoint-up(md) {
    width: 40%;
    width: 35%;
    margin: 0 auto 0 0;
  }
}
.form {
  width: 100%;
  @include media-breakpoint-up(md) {
    width: 60%;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > div {
      @include media-breakpoint-up(sm) {
        padding-right: 0;
      }
    }
  }
}
.contact-img {
  max-height: 240px;
  overflow: hidden;
  img {
    width: 90%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  @include media-breakpoint-down(sm) {
    display: none;
  }
}
button {
  border: none;
  background: var(--fourth-color);
  color: var(--fifth-color);
  border-radius: 2px;
  padding: 8px;
  width: 100px;
  margin-bottom: 20px;
  &:hover {
    background: #06bc9b;
    -webkit-transition: background-color 400ms linear;
    -moz-transition: background-color 400ms linear;
    -o-transition: background-color 400ms linear;
    -ms-transition: background-color 400ms linear;
    transition: background-color 400ms linear;
  }
}
</style>
