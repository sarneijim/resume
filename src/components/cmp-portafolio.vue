<template>
  <div id="portafolio" class="section">
    <h2>Portafolio</h2>
    <div class="portafolio-carousel">
      <slick ref="slick" :options="slickOptions">
        <div class="card">
          <a target="_blank" href="https://youtu.be/lP6eNE6Adpk">
            <div class="card-container">
              <img src="@/assets/img/tranq.png" alt>
              <div class="card-body">
                <p class="card-text">Tranq</p>
              </div>
            </div>
          </a>
        </div>
        <div class="card">
          <a target="_blank" href="https://www.bde.es/">
            <div class="card-container">
              <img src="@/assets/img/bde.png" alt>
              <div class="card-body">
                <p class="card-text">Banco de España</p>
              </div>
            </div>
          </a>
        </div>
        <div class="card">
          <a target="_blank" href="https://www.naturgy.com/">
            <div class="card-container">
              <img src="@/assets/img/naturgy.png" alt>
              <div class="card-body">
                <p class="card-text">Naturgy</p>
              </div>
            </div>
          </a>
        </div>
        <div class="card">
          <a target="_blank" href="https://www.blueplanet.com/">
            <div class="card-container">
              <img src="@/assets/img/ciena.png" alt>
              <div class="card-body">
                <p class="card-text">Ciena</p>
              </div>
            </div>
          </a>
        </div>
      </slick>
    </div>
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
        speed: 300,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.card {
  padding: 10px;
  margin: 0 auto;
  border: none;
  background: transparent;
  a {
    height: 260px;
    width: 90%;
  }
  .card-container {
    border: 1px solid var(--second-color);
    overflow: hidden;
    border-radius: 3px;
    background: var(--third-color);
  }
  img {
    height: 200px;
    margin: 0 auto;
  }
  &:hover {
    border-color: #06bc58;
    .card-body {
      background: #06bc58;
      -webkit-transition: background-color 400ms linear;
      -moz-transition: background-color 400ms linear;
      -o-transition: background-color 400ms linear;
      -ms-transition: background-color 400ms linear;
      transition: background-color 400ms linear;
    }
  }
}
a:hover {
  text-decoration: none;
}
.card-body {
  background: var(--fourth-color);
  color: var(--fifth-color);
}
.portafolio-carousel {
  width: calc(100% - 70px);
  margin: 38px auto 68px;
}
</style>

<style lang="scss">
.portafolio-carousel {
  .slick-dots li.slick-active button:before {
    color: var(--fourth-color);
  }

  .slick-arrow {
    &:hover:before {
      color: #06bc58;
      -webkit-transition: background-color 400ms linear;
      -moz-transition: background-color 400ms linear;
      -o-transition: background-color 400ms linear;
      -ms-transition: background-color 400ms linear;
      transition: background-color 400ms linear;
    }
    &:before {
      color: var(--fourth-color);
      opacity: 1;
    }
  }
  .slick-dots {
    bottom: -40px;
    li button:before {
      color: #06bc58;
    }
  }
}
</style>