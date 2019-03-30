<template>
  <div id="tech" class="section">
    <h2>Technical Skills</h2>
    <div class="tech-main" v-on="{mouseover: checkMouseover}">
      <div class="tech-list">
        <ul>
          <li>HTML</li>
          <li>JADE</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Bootstrap</li>
          <li>Element UI</li>
          <li>AgGrid</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>Ember</li>
          <li>Vue</li>
          <li>SQL</li>
          <li>Ruby on Rails</li>
          <li>Git</li>
          <li>SVN</li>
          <li>ExpressJS</li>
          <li>NodeJS</li>
        </ul>
      </div>
      <div class="tech-animation">
        <transition-group :name="shuffleSpeed" tag="div" class="deck">
          <div v-for="card in cards" :key="card.id" class="card card-container">
            <img class="card" :src="card.image">
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Tech",
  data: function() {
    return {
      cards: [],
      image: [
        require("@/assets/img/tech/angular.png"),
        require("@/assets/img/tech/apple.png"),
        require("@/assets/img/tech/bootstrap.png"),
        require("@/assets/img/tech/bower.png"),
        require("@/assets/img/tech/css.png"),
        require("@/assets/img/tech/elementui.png"),
        require("@/assets/img/tech/ember.png"),
        require("@/assets/img/tech/git.png"),
        require("@/assets/img/tech/grunt.png"),
        require("@/assets/img/tech/gulp.png"),
        require("@/assets/img/tech/handlebars.png"),
        require("@/assets/img/tech/heroku.png"),
        require("@/assets/img/tech/html.png"),
        require("@/assets/img/tech/jquery.png"),
        require("@/assets/img/tech/js.png"),
        require("@/assets/img/tech/kraken.png"),
        require("@/assets/img/tech/node.png"),
        require("@/assets/img/tech/rails.png"),
        require("@/assets/img/tech/react.png"),
        require("@/assets/img/tech/ruby.png"),
        require("@/assets/img/tech/scss.png"),
        require("@/assets/img/tech/sql.png"),
        require("@/assets/img/tech/sublime.png"),
        require("@/assets/img/tech/svn.png"),
        require("@/assets/img/tech/tortoise.png"),
        require("@/assets/img/tech/ubuntu.png"),
        require("@/assets/img/tech/vc.png"),
        require("@/assets/img/tech/vue.png"),
        require("@/assets/img/tech/windows.png"),
        require("@/assets/img/tech/w3.png")
      ],
      shuffleSpeed: "shuffle"
    };
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    checkMouseover() {
      const element = this.$el.querySelector(".card");
      if (!element.classList.contains("shuffle-move")) {
        this.shuffleDeck();
      }
    },
    displayInitialDeck() {
      let id = 1;
      this.cards = [];
      for (let r = 0; r < this.image.length; r++) {
        let card = {
          id: id,
          image: this.image[r]
        };
        this.cards.push(card);
        id++;
      }
    },
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        Vue.set(this.cards, i, this.cards[randomIndex]);
        Vue.set(this.cards, randomIndex, temp);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

#tech {
  background: var(--third-color);
  color: var(--second-color);
}
.tech-main {
  @include media-breakpoint-up(md) {
    display: flex;
    align-items: center;
    max-width: 750px;
    margin: 0 auto;
  }
}
.tech-list {
  @include media-breakpoint-up(md) {
    width: 70%;
  }
  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    padding-top: 10px;
    width: 265px;
    margin: 0 auto;
    @include media-breakpoint-up(sm) {
      columns: 3;
      -webkit-columns: 3;
      -moz-columns: 3;
      padding-top: 10px;
      width: 450px;
    }

    text-align: left;
    margin-bottom: 40px;

    li {
      position: relative;
      padding: 0 0 0 23px;
      &:before {
        font-weight: 800;
        font-family: "Font Awesome 5 Free";
        content: "\f00c";
        font-size: 12px;
        position: absolute;
        top: 3px;
        left: 0px;
      }
    }
  }
}
.tech-animation {
  @include media-breakpoint-up(md) {
    width: 30%;
  }
  display: inline-block;
  padding-bottom: 50px;
}
.card {
  width: 100%;
  float: left;
  border: none;
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
}
.card-container {
  @include media-breakpoint-up(sm) {
    width: calc(100% / 15 - 2px);
  }
  @include media-breakpoint-up(md) {
    width: calc(100% / 6 - 2px);
  }
  width: calc(100% / 10 - 2px);
  float: left;
  margin: 1px;
  border: 1px solid var(--second-color);
}

.shuffle-move {
  transition: transform 1s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>