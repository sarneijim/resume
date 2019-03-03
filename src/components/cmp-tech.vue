<template>
  <div id="cmp-tech" class="section">
    <!--<h1 class="title">Technicals Skills</h1>-->
    <div class="text-left overflow-hidden">Tools
      <!-- <img src="../assets/logo-vue.png" alt="Vue" height="120">
      <img src="../assets/logo-python.png" alt="Python" height="120">
      <img src="../assets/logo-react.png" alt="React" height="120">
      <img src="../assets/logo-nodejs.png" alt="Nodejs" height="120">
      <img src="../assets/logo-javascript.png" alt="Javascript" height="120">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Tech"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #54ce50;
  font-family: Varela Round;
}

.react-anim {
  font-weight: bold;
  position: relative;
  animation: react-move 5s infinite;
}

.node-anim {
  font-weight: bold;
  position: relative;
  animation: node-move 5s infinite;
}

.vue-anim {
  font-weight: bold;
  position: relative;
  animation: vue-move 5s infinite;
}

.js-anim {
  font-weight: bold;
  position: relative;
  animation: js-move 5s infinite;
}

/* Standard syntax */
#react-anim {
  animation-timing-function: linear;
}
#vue-anim {
  animation-timing-function: ease;
}
#node-anim {
  animation-timing-function: ease-in;
}
#js-anim {
  animation-timing-function: ease-out;
}

/* Standard syntax */
@keyframes react-move {
  0% {
    left: 0px;
    top: 0px;
  }
  50% {
    left: 50%;
    top: 50px;
  }
  100% {
    left: 100%;
    top: 0px;
  }
}

/* Standard syntax */
@keyframes vue-move {
  0% {
    left: 0px;
    top: 0px;
  }
  50% {
    left: 50%;
    top: 50px;
  }
  100% {
    left: 100%;
    top: 0px;
  }
}

/* Standard syntax */
@keyframes node-move {
  0% {
    left: 0px;
    top: 0px;
  }
  50% {
    left: 50%;
    top: 50px;
  }
  100% {
    left: 100%;
    top: 0px;
  }
}

/* Standard syntax */
@keyframes js-move {
  0% {
    left: 0px;
    top: 0px;
  }
  50% {
    left: 50%;
    top: -90px;
  }
  100% {
    left: 100%;
    top: 0px;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
