<template>
    <nav id="myScrollspy">
      <ul class="nav nav-pills" v-bind:class="{ active: isActive}" 
      @mouseover="isActive = true" @mouseout="isActive = false">
        <li class="nav-item">
          <a v-on:click="greet" class="nav-link active" href="#section1">
          	<i class="fas fa-user"></i>
          	<span>About</span>
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="greet" class="nav-link" href="#section2">
          	<i class="fas fa-laptop-code"></i>
          	<span>Technical Skills</span>
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="greet" class="nav-link" href="#section3">
          	<i class="fas fa-briefcase"></i>
          	<span>Professional experience</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a v-on:click="greet" class="nav-link" href="#section4">
          	<i class="fas fa-graduation-cap"></i>
          	<span>Education</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a v-on:click="greet" class="nav-link" href="#">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'cmp-menu',
  data: function () {
    return {
      isActive: false,
    }
  },
  methods: {
    greet: function (event) {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

#myScrollspy{
	padding: 0;
	width: 100%;
}
.nav{
	position: fixed;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  background-color: rgba(45, 45, 45, 0.98);;
  overflow: hidden;
  -webkit-transition: width 1s;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  // transition-delay: 2s;
  @include media-breakpoint-up(md) {
      flex-direction: column;
      width: 40px;
      height: 450px;
      margin-top: 10px;
  }
  &.active{
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
  span{
  	white-space: nowrap;
    color: #fff;
  	@include media-breakpoint-down(xs) {
      	display: none;
  	}
  }
  i{
    color: #fff;
    padding: 13px;
  }
  .nav-link{
    padding: 0px;
  	@include media-breakpoint-up(md) {
  	  display: flex;
  		height: 100%;
  		align-items: center;
      &.active { 
      &::before{
        content: '';
        height: 100%;
        border-left: solid 1px #fff;
        border-radius: 1px;
        position: absolute;
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