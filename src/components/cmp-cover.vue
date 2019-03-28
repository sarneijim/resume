<template>
  <div id="cmp-cover">
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/video/video3.mp4" type="video/mp4">
    </video>
    <p class="cover-title">Always in search new challenges!</p>
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
  height: 400px;
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
}
video {
  width: 100%;
  opacity: 0.2;
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
  color: var(--fourth-color);
  position: absolute;
  font-size: 35px;
  width: 330px;
  font-family: "Fredericka the Great";
  margin: 0;
  text-shadow: 5px 5px 5px #00000038;
  font-weight: 800;
}
</style>

