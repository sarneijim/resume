<template>
  <div id="rrss-list" v-bind:class="{ active: isActive}" class="section">
    <div class="rrss-title" v-on:click="toogle">
      <i class="fas fa-rss"></i>
    </div>
    <ul class="rrss-list">
      <li class="rrss-item">
        <a class="rrss-link" href="https://www.linkedin.com/in/saraneila" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li class="rrss-item">
        <a class="rrss-link">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Rrss",
  data: function() {
    return {
      isActive: false
    };
  },
  created() {
    window.addEventListener("click", this.closeRrss);
  },
  methods: {
    toogle(event) {
      this.isActive = !this.isActive;
    },
    closeRrss(event) {
      if (!this.$el.contains(event.target) && this.isActive) {
        this.isActive = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

#rrss-list {
  padding: 0;
  width: 20%;
  z-index: 1;
}
.rrss-title {
  top: 0;
  position: fixed;
  width: 20%;
  background-color: rgba(45, 45, 45, 0.98);
  @include media-breakpoint-up(md) {
    display: none;
  }
}
.rrss-list {
  position: fixed;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  background-color: rgba(45, 45, 45, 0.98);
  overflow: hidden;
  padding: 0;
  top: 42px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  @include media-breakpoint-up(md) {
    display: flex;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0px;
    flex-direction: column;
    width: 40px;
    height: 150px;
    position: fixed;
    left: 0;
    top: 480px;
  }
}
.active .rrss-list {
  display: block;
}
.rrss-item {
  width: 20%;
  position: relative;
  @include media-breakpoint-up(md) {
    text-align: left;
    width: 100%;
    height: 50%;
  }
}
.rrss-link {
  padding: 0px;
  @include media-breakpoint-up(md) {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
i {
  color: #fff;
  padding: 13px;
}
</style>