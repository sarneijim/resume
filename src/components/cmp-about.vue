<template>
  <div id="cmp-about" class="section">
    <div class="about-img">
      <img src="@/assets/img/y4.jpg" alt="sara">
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

#cmp-about {
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
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
  img {
    width: 60%;
    border: 2px solid var(--second-color);
    border-radius: 50%;
  }
}

.about-title {
  color: var(--first-color);
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
  width: 100%;
}

.about-subtitle {
  font-size: 22px;
  color: var(--first-color);
}
.about-text {
  font-style: italic;
  font-weight: 800;
  width: 50%;
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
}
.about-description {
  // background: #f2f2f2;
  color: var(--second-color);
  padding: 0 10px 30px;
  p {
    font-style: italic;
    max-width: 450px;
    margin: 10px auto;
    font-weight: 600;
    font-size: 15px;
  }
}
.about-icons {
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  color: var(--fourth-color);
  @include media-breakpoint-down(sm) {
    font-size: 20px;
  }
}
</style>

