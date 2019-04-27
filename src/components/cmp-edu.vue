<template>
  <div id="edu" class="section">
    <h2>Academic background</h2>
    <ul class="edu-list">
      <li class="edu-item">
        <div class="edu-item-body">
          <div class="edu-item-icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <h3 class="edu-item-title">Industrial Engineer</h3>
          <p class="edu-item-text">Universidad de Sevilla</p>
          <div class="button">
            <button type="button" data-toggle="modal" data-target="#universityModal">More details</button>
          </div>
        </div>
      </li>
      <li class="edu-item">
        <div class="edu-item-body">
          <div class="edu-item-icon">
            <i class="fas fa-laptop"></i>
          </div>
          <h3 class="edu-item-title">Full Stack Developer</h3>
          <p class="edu-item-text">Le Wagon</p>
          <div class="button">
            <button type="button" data-toggle="modal" data-target="#universityModal">More details</button>
          </div>
        </div>
      </li>
    </ul>

    <!-- Modals -->
    <div
      class="modal fade"
      id="universityModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="edu-title">
              <span>Master's Degree. Industrial Engineer</span>
            </div>
            <div class="edu-date">
              <span>2007 - 2015</span>
            </div>
            <ul class="career-description">
              <li class="edu-description-item">
                <p>Energy Specialty.</p>
              </li>
              <li class="edu-description-item">
                <p>Thesis: Project of design and construction of a PV system.</p>
              </li>
              <li class="edu-description-item">
                <p>SICUE exchange program: Universidad del País Vasco (Bilbao) / October 2013-December 2014.</p>
              </li>
              <li class="edu-description-item">
                <p>Main Subjects</p>
                <ul>
                  <li>Industrial installations, construction and architecture</li>
                  <li>Electricity, electronics, systems and automation</li>
                  <li>Mechanical and material engineering</li>
                  <li>Manufacturing process and product design</li>
                  <li>Hydraulic, thermal, nuclear and alternative energies</li>
                  <li>Environmental technology</li>
                  <li>Company organization and administration</li>
                  <li>Methodology, organisation, direction and management of projects</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
#edu {
  // background: var(--third-color);
  // background-image: url(../assets/img/bg2.png);
}
.edu-list {
  display: flex;
  justify-content: space-around;
  padding: 20px 0 30px;
  max-width: 1000px;
  margin: 0 auto;
}
.edu-item {
  position: relative;
  display: flex;
  width: 310px;
  margin: 10px 5px;
  border: 1px solid var(--second-color);
  background: var(--fifth-color);
  padding: 10px 0 60px;
  border-radius: 3px;
}
.edu-item-body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.edu-item-icon {
  i {
    background: var(--third-color);
    padding: 25px 23px;
    border-radius: 50%;
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 20px;
    color: var(--second-color);
    width: 80px;
  }
}
.edu-item-title {
  font-size: 20px;
}
.edu-item-text {
  margin-top: 10px;
  color: var(--second-color);
}
.button {
  position: absolute;
  width: calc(100% - 10px);
  margin-left: 5px;
  @include media-breakpoint-up(sm) {
    right: -8px;
    width: 100%;
  }
  bottom: 15px;
  max-width: 300px;
  overflow: hidden;
  button {
    width: 100%;
    border: none;
    background: var(--fourth-color);
    color: var(--fifth-color);
    border-radius: 2px;
    padding: 10px 10px 10px 15px;
    text-align: left;
    &:hover {
      background: #06bc58;
      -webkit-transition: background-color 400ms linear;
      -moz-transition: background-color 400ms linear;
      -o-transition: background-color 400ms linear;
      -ms-transition: background-color 400ms linear;
      transition: background-color 400ms linear;
    }
  }
  &:after {
    font-family: "Font Awesome 5 Free";
    position: absolute;
    color: var(--fifth-color);
    font-size: 20px;
    top: 7px;
    right: 10px;
    width: 20px;
    height: 20px;
    content: "\F138";
    font-weight: 800;
    border-radius: 10px;
    pointer-events: none;
  }
}
.modal-header {
  border: 0;
  padding: 20px 20px 0 0;
  z-index: 1;
}
.modal-body {
  position: relative;
  margin-left: 10px;
  padding-top: 0;
  color: var(--second-color);
  margin-top: -15px;
}
.edu-title {
  font-weight: 800;
  text-align: left;
  margin: 0 0 20px;
  color: var(--fourth-color);
}
.edu-date {
  position: absolute;
  right: 40px;
  top: 22px;
  font-size: 0.9em;
  font-style: italic;
}
.edu-description-item {
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
