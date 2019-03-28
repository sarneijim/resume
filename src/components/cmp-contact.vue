<template>
  <div id="cmp-contact" class="section">
    <h2>Let's chat</h2>
    <div class="contact-main">
      <div class="intro">
        <p>Feel free to drop me a line! If you're interested in working with me, please provide as much information as you possibly can about your project. I'll get back to you as soon as possible. Looking forward to hearing from you!</p>
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
          <button @click="submit">Submit</button>
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

      console.log("hola me estan por enviar");
      debugger;
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
          alert("Ocurrio un problema al enviar  el correo");
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
.contact-main {
  display: flex;
  flex-wrap: wrap;
}
.intro,
.form {
  width: 100%;
  @include media-breakpoint-up(md) {
    width: 50%;
  }
}
.contact-img img {
  width: 90%;
  @include media-breakpoint-down(sm) {
    display: none;
  }
}
</style>
