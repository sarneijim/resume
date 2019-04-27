<template>
  <div id="cmp-cover">
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/video/video3.mp4" type="video/mp4">
    </video>
    <p class="cover-title">PUSH yourself, because no one else is going to do it for you.</p>
    <a class="cover-button" href="#about">
      <i class="fas fa-chevron-down"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>


<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

#cmp-cover {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: right top;
  background-size: 100% auto;
  height: 100vh;
}
video {
  width: 300%;
  @include media-breakpoint-up(md) {
    width: 150%;
  }
  opacity: 0.85;
}
.cover-container {
  height: 100%;
  @include media-breakpoint-up(md) {
    width: 60%;
  }
  border-radius: 50%;
  align-items: center;
  margin: 0 auto 0 0;
}
.cover-title {
  color: var(--fifth-color);
  position: absolute;
  font-size: 35px;
  width: 450px;
  font-family: "Candal", sans-serif;
  margin: 0;
  text-shadow: 5px 5px 5px #00000038;
  font-weight: 800;
}
.cover-button {
  position: absolute;
  bottom: 0;
  font-size: 45px;
  width: 100px;
  height: 50px;
  background: var(--fourth-color);
  -moz-border-radius: 100px 100px 0 0;
  -webkit-border-radius: 100px 100px 0 0;
  border-radius: 100px 100px 0 0;
  i {
    color: var(--fifth-color);
  }
}
</style>

