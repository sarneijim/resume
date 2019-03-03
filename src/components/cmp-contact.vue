<template>
  <div id="cmp-contact" class="section">
    <!--<h1 class="title">Contact</h1>-->
    <form>
      <div class="form-row">
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
      </div>
      <div class="form-row">
        <div class="col-md-12 mb-3 text-left">
          <label for="subject">Subject</label>
          <input type="text" class="form-control" id="subject" placeholder="Subject" required>
        </div>
      </div>
      <div class="form-row text-left">
        <div class="col-md-12 mb-3 text-left">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
      </div>
      <button class="btn btn-primary submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.left {
  text-align: left;
}

.title {
  color: #54ce50;
  font-family: Varela Round;
}

.submit {
  background-color: #54ce50;
  border-color: #54ce50;
}
</style>
