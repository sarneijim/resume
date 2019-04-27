<template>
  <div id="portafolio" class="section">
    <h2>Portafolio</h2>
    <slick ref="slick" :options="slickOptions">
      <a href="http://placehold.it/2000x1000">
        <div class="card">
          <img src="@/assets/img/tranq.png" alt>
          <div class="card-body">
            <p class="card-text">Tranq.</p>
          </div>
        </div>
      </a>
      <a href="http://placehold.it/2000x1000">
        <div class="card">
          <img src="@/assets/img/bde.png" alt>
          <div class="card-body">
            <p class="card-text">Tranq.</p>
          </div>
        </div>
      </a>
      <a href="http://placehold.it/2000x1000">
        <div class="card">
          <img src="@/assets/img/naturgy.png" alt>
          <div class="card-body">
            <p class="card-text">Tranq.</p>
          </div>
        </div>
      </a>
      <a href="http://placehold.it/2000x1000">
        <div class="card">
          <img src="@/assets/img/ciena.png" alt>
          <div class="card-body">
            <p class="card-text">Tranq.</p>
          </div>
        </div>
      </a>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  name: "Tech",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 3,
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true
      }
    };
  }
};
</script>
<style src="slick-carousel/slick/slick.css"></style>
<style scoped lang="scss">
.card {
  border: 2px solid var(--fourth-color);
  height: 260px;
  width: 85%;
  margin: 0 auto;
  img {
    height: 200px;
  }
}
.card-body {
  background: var(--fourth-color);
  color: var(--fifth-color);
}
</style>