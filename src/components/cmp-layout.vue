<template>
  <div class="container-fluid">
    <div class="row">
      <cmp-menu></cmp-menu>
      <cmp-rrss></cmp-rrss>
      <div class="main">
        <cmp-about></cmp-about>
        <cmp-tech></cmp-tech>
        <cmp-career></cmp-career>
        <cmp-contact></cmp-contact>
      </div>
    </div>
  </div>
</template>

<script>
import cmpMenu from "./cmp-menu.vue";
import cmpRrss from "./cmp-rrss.vue";
import cmpAbout from "./cmp-about.vue";
import cmpTech from "./cmp-tech.vue";
import cmpCareer from "./cmp-career.vue";
import cmpContact from "./cmp-contact.vue";

export default {
  name: "layout",
  components: {
    cmpMenu,
    cmpRrss,
    cmpAbout,
    cmpTech,
    cmpCareer,
    cmpContact
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.main {
  margin-top: 50px;
  width: 100%;
  @include media-breakpoint-up(md) {
    margin-top: 0px;
  }
}

.section {
  @include media-breakpoint-up(md) {
    padding-left: 50px;
  }
}
</style>
