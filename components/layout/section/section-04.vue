<template>
  <div>
    <div class="sectionfour--bg--image">
      &nbsp;
    </div>
    <div class="sectionfour--bg">
      &nbsp;
    </div>
    <div class="sectionfour">
      <a-row type="flex" align="middle" style="min-height: 300px;">
        <a-col :xs="24" :md="24" :lg="15" class="sectionfour__text">
          <h2>{{ title }}</h2>
          <p>
            <slot />
          </p>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionFour",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
.border {
  border: 1px solid gray;
}
.sectionfour--bg {
  background-image: linear-gradient(
    to right,
    rgb(81, 172, 68),
    rgba(81, 172, 68, 0.75)
  );
  height: 345px;
  width: 100%;
  left: 0;
  top: 95px;
  position: absolute;
}
.sectionfour--bg--image {
  height: 345px;
  width: 100%;
  left: 0;
  top: 95px;
  background-image: url("https://storage.googleapis.com/lsppmi/assets/frontend/sliders/slider-003.jpg");
  opacity: 1;
  position: absolute;
}
.sectionfour {
  padding: 0px 0px;
}
.sectionfour__text {
  color: rgba(255, 255, 255, 0.78);
}
.sectionfour__text p {
  margin: 0 0 25px;
  line-height: 30px;
}
.sectionfour__text h2 {
  color: rgba(255, 255, 255, 1) !important;
  font-weight: 600 !important;
  font-size: 30px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  position: relative;
  line-height: 1.2;
}
.sectionfour__text h2::after {
  background-color: rgb(255, 255, 255);
  bottom: -5px;
  content: "";
  display: block;
  height: 3px;
  left: 65px;
  position: absolute;
  transform: translate(-50%, 0);
  width: 127px;
}
.sectionfour__text a {
  padding: 3px 5px;
}
</style>
