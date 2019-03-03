<template>
  <div id="cmp-about" class="section">
    <div>
      <!--<h1 class="title">About me</h1>-->
      <div class="image"></div>
      <p>Hire me, I'm the best! Hire me, I'm the best! Hire me, I'm the best! Hire me, I'm the best! Hire me, I'm the best! Hire me, I'm the best! Hire me, I'm the best!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.image {
  content: "";
  max-width: 100%;
  max-height: 100%;
}
​ h3 {
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

.title {
  color: #54ce50;
  font-family: Varela Round;
}
</style>
