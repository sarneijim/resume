<template>
  <div id="cmp-about" class="section">
    <div>
      <div id="about-presentation">
        <div class="about-container">
          <p class="about-title">Sara Neila</p>
          <p class="about-subtitle">Full Stack Developer</p>
          <p class="about-text">Always in search new challenges!</p>
          <div class="about-description">
            <p>Industrial Engineering graduate, I am pursuing my professional career as a Web Developer. Currently, I am working in Ciena.</p>
          </div>
        </div>
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

#about-presentation {
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8),
      rgba(242, 242, 242, 0.2),
      rgba(242, 242, 242, 1)
    ),
    url(../assets/img/ymv.jpg) right fixed;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-size: cover;
  @include media-breakpoint-up(md) {
    background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0),
        rgba(242, 242, 242, 0.2),
        rgba(242, 242, 242, 1)
      ),
      url(../assets/img/y4.jpg) right fixed;
    background-size: cover;
  }
}

.about-container {
  height: 100%;
  @include media-breakpoint-up(md) {
    width: 60%;
  }
  border-radius: 50%;
  align-items: center;
  margin: 0 auto 0 0;
}
.about-title {
  color: #c31f26;
  font-size: 30px;
  margin: 25px 0 0 0;
  font-weight: 800;
  font-style: italic;
  width: 100%;
}

.about-subtitle {
  font-size: 22px;
  color: #c31f26;
}
.about-text {
  font-style: italic;
  font-weight: 800;
}
.about-description {
  // background: #f2f2f2;
  // color: #111;
  padding: 0 10px 35px;
  p {
    font-style: italic;
    max-width: 450px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 15px;
  }
}
</style>

