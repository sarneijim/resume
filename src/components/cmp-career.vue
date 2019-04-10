<template>
  <div id="career" class="section">
    <h2>Work experience</h2>
    <ul class="career-list">
      <li class="career-item">
        <div class="career-company">
          <a target="_blank" href="http://www.my01.io/">
            <img src="@/assets/img/logo-ciena.png" alt="Nodejs" height="120">
            <span class="sr-only">Ciena</span>
          </a>
        </div>
        <div class="career-title career-title--america">
          <span>Software Engineer</span>
        </div>
        <div class="career-date">
          <span>November 2018 - Present</span>
        </div>
        <ul class="career-description">
          <li class="career-description-item">
            <p>Experience with web based technologies like HTML/HTML5 (Jade), CSS/CSS3 (Sass) and JavaScript (JQuery)</p>
          </li>
          <li class="career-description-item">
            <p>Develop responsive projects on the web by the use of libraries (Element UI)</p>
          </li>
          <li class="career-description-item">
            <p>Use of task runners such as Yarn</p>
          </li>
          <li class="career-description-item">
            <p>Use of frameworks (Ember & Vue)</p>
          </li>
          <li class="career-description-item">
            <p>Knowledge of version control systems (Git)</p>
          </li>
          <li class="career-description-item">
            <p>Use of project management tools (JIRA)</p>
          </li>
        </ul>
      </li>
      <li class="career-item">
        <div class="career-company">
          <a target="_blank" href="http://www.my01.io/">
            <img src="@/assets/img/logo-indra2.png" alt="Nodejs" height="120">
            <span class="sr-only">Indra</span>
          </a>
        </div>
        <div class="career-title career-title--europe">
          <span>Front End Developer</span>
        </div>
        <div class="career-date">
          <span>March 2017 - May 2018</span>
        </div>
        <ul class="career-description">
          <li class="career-description-item">
            <p>Experience with web based technologies like HTML/HTML5 (Jade), CSS/CSS3 (Sass) and JavaScript (JQuery)</p>
          </li>
          <li class="career-description-item">
            <p>Develop responsive projects on the web by the use of libraries (Bootstrap)</p>
          </li>
          <li class="career-description-item">
            <p>Modular and reusable code to be used with the web content management platform OWCS (Oracle Web Center Sites)</p>
          </li>
          <li class="career-description-item">
            <p>Knowledge of web accessibility and W3C standards</p>
          </li>
          <li class="career-description-item">
            <p>Use of task runners such as Grunt and Gulp</p>
          </li>
          <li class="career-description-item">
            <p>Use of templating engines (handlebars)</p>
          </li>
          <li class="career-description-item">
            <p>Knowledge of version control systems (Git, SVN)</p>
          </li>
          <li class="career-description-item">
            <p>Use of project management tools (JIRA)</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Career"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#career {
  background: var(--fifth-color);
  color: var(--second-color);
}
.career-item:before {
  content: " ";
  background: var(--third-color);
  display: inline-block;
  position: absolute;
  top: 0;
  left: -26px;
  width: 1px;
  height: 22px;
}
.career-item:after {
  content: " ";
  background: var(--third-color);
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: -26px;
  width: 1px;
  height: calc(100% - 42px);
}
.career-title:before {
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  position: absolute;
  color: var(--second-color);
  font-size: 20px;
  left: -35px;
  top: 17px;
  width: 20px;
  height: 20px;
}

.career-title--europe:before {
  content: "\f7a2";
}
.career-title--america:before {
  content: "\f57d";
}
.career-item {
  position: relative;
  padding: 15px 0px;
}
.career-company {
  font-weight: 800;
  text-align: left;
  img {
    height: 20px;
  }
}
.career-title {
  font-weight: 800;
  text-align: left;
  margin: 7px 0;
  color: var(--first-color);
}
.career-list {
  padding: 10px 10px 50px 50px;
  position: relative;
  max-width: 950px;
  margin: 0 auto;
}
.career-date {
  position: absolute;
  right: 0;
  top: 8px;
  font-size: 0.9em;
  font-style: italic;
}
.career-description-item {
  text-align: left;
  padding: 0 0 0 23px;
  position: relative;
  &:before {
    font-weight: 800;
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    position: absolute;
    left: 0;
    font-size: 12px;
    top: 3px;
  }
  p {
    margin: 0;
  }
}
</style>
