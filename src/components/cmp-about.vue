<template>
  <div id="about" class="section">
    <div class="about-img">
      <!-- <img src="@/assets/img/y4.jpg" alt="sara"> -->
      <video autoplay muted loop id="myVideo">
        <source
          src="https://res.cloudinary.com/sarneijim/video/upload/v1556347377/resume/yo4.mp4"
          type="video/mp4"
        >
      </video>
    </div>
    <div class="about-text">
      <p class="about-title">Sara Neila</p>
      <p class="about-subtitle">Full Stack Developer</p>
      <div class="about-description">
        <p>Industrial Engineering graduate, passionate about code, I am pursuing my professional career as a Web Developer.</p>
        <p>Currently, I am working in Ciena.</p>
      </div>
      <div class="about-icons">
        <i class="fas fa-laptop"></i>
        <i class="fas fa-toolbox"></i>
        <i class="fas fa-cogs"></i>
      </div>
    </div>
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

#about {
  background-color: var(--fifth-color);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 0;
  @include media-breakpoint-down(sm) {
    padding: 50px 0 25px;
  }
}
.about-img {
  width: 50%;
  margin-bottom: 25px;
  max-width: 500px;
  margin: 0 0 0 auto;
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
  img,
  video {
    width: 60%;
    max-width: 225px;
    // border: 1px solid var(--second-color);
  }
}

.about-title {
  color: var(--first-color);
  font-size: 30px;
  font-weight: 800;
  width: 100%;
  margin-bottom: 0px;
}

.about-subtitle {
  font-size: 22px;
  color: var(--first-color);
  font-style: italic;
}
.about-text {
  font-weight: 800;
  width: 50%;
  max-width: 500px;
  margin: 0 auto 0 0;
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
}
.about-description {
  color: var(--second-color);
  padding: 0 10px 10px;
  p {
    font-style: italic;
    max-width: 450px;
    margin: 10px auto;
    font-weight: 600;
    font-size: 15px;
  }
}
.about-icons {
  font-size: 25px;
  display: flex;
  justify-content: space-around;
  color: var(--fourth-color);
  max-width: 300px;
  margin: 0 auto;
  @include media-breakpoint-down(sm) {
    font-size: 20px;
  }
}
</style>

