<template>
  <div class="container-fluid">
    <div class="row">
      <cmp-menu></cmp-menu>
      <cmp-rrss></cmp-rrss>
      <div class="main">
        <cmp-cover></cmp-cover>
        <cmp-about></cmp-about>
        <cmp-tech></cmp-tech>
        <cmp-portafolio></cmp-portafolio>
        <cmp-career></cmp-career>
        <cmp-edu></cmp-edu>
        <cmp-contact></cmp-contact>
      </div>
    </div>
  </div>
</template>

<script>
import cmpMenu from "./cmp-menu.vue";
import cmpRrss from "./cmp-rrss.vue";
import cmpCover from "./cmp-cover.vue";
import cmpAbout from "./cmp-about.vue";
import cmpTech from "./cmp-tech.vue";
import cmpPortafolio from "./cmp-portafolio.vue";
import cmpCareer from "./cmp-career.vue";
import cmpEdu from "./cmp-edu.vue";
import cmpContact from "./cmp-contact.vue";

export default {
  name: "layout",
  components: {
    cmpMenu,
    cmpRrss,
    cmpCover,
    cmpAbout,
    cmpTech,
    cmpPortafolio,
    cmpCareer,
    cmpEdu,
    cmpContact
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.main {
  padding-bottom: 50px;
  width: 100%;
  background: var(--third-color);
  background-image: url(../assets/img/bg2.png);
  @include media-breakpoint-up(md) {
    margin-top: 0px;
  }
}
</style>
