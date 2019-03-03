<template>
  <nav id="cmp-menu" class="section">
    <ul
      class="nav nav-pills"
      v-bind:class="{ active: isActive}"
      @mouseover="isActive = true"
      @mouseout="isActive = false"
    >
      <li class="nav-item">
        <a v-on:click="toogle" class="nav-link active" href="#cmp-about">
          <i class="fas fa-user"></i>
          <span>About</span>
        </a>
      </li>
      <li class="nav-item">
        <a v-on:click="toogle" class="nav-link" href="#cmp-tech">
          <i class="fas fa-laptop-code"></i>
          <span>Technical Skills</span>
        </a>
      </li>
      <li class="nav-item">
        <a v-on:click="toogle" class="nav-link" href="#cmp-career">
          <i class="fas fa-briefcase"></i>
          <span>Professional experience</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a v-on:click="toogle" class="nav-link" href="#section4">
          <i class="fas fa-graduation-cap"></i>
          <span>Education</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a v-on:click="toogle" class="nav-link" href="#cmp-contact">
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toogle: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

#cmp-menu {
  padding: 0;
  width: 80%;
  z-index: 1;
}
.nav {
  position: fixed;
  justify-content: space-between;
  width: 80%;
  color: #fff;
  background-color: rgba(45, 45, 45, 0.98);
  overflow: hidden;
  -webkit-transition: width 1s;
  // transition-delay: 2s;
  @include media-breakpoint-up(md) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-direction: column;
    width: 40px;
    height: 450px;
    margin-top: 10px;
  }
  &.active {
    @include media-breakpoint-up(md) {
      width: 250px;
    }
  }
}
.nav-item {
  width: 20%;
  position: relative;
  @include media-breakpoint-up(md) {
    text-align: left;
    width: 100%;
    height: 20%;
  }
  span {
    white-space: nowrap;
    color: #fff;
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
  i {
    color: #fff;
    padding: 13px;
  }
  .nav-link {
    padding: 0px;
    &.active {
      &::before {
        content: "";
        width: 100%;
        border-top: solid 2px #c31f26;
        border-radius: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    @include media-breakpoint-up(md) {
      display: flex;
      height: 100%;
      align-items: center;
      &.active {
        &::before {
          border-left: solid 1px #fff;
          border-top: none;
          top: 0;
          left: 0;
        }
      }
    }
    &.active {
      background-color: transparent;
    }
  }
}
</style>