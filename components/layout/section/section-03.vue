<template>
  <div class="sectionthree">
    <a-row type="flex" justify="center" align="middle">
      <a-col :xs="24" :sm="24" :md="24" :lg="12" class="sectionthree__image">
        <img />
        <img class="img--frame1" :src="image1" alt="LSPPMI" />
        <img class="img--frame2" :src="image2" alt="LSPPMI" />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" class="sectionthree__text">
        <h2>{{ title }}</h2>
        <p>
          <slot />
        </p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "SectionThree",
  props: {
    image1: {
      type: String,
      required: true,
      default: ""
    },
    image2: {
      type: String,
      required: true,
      default: ""
    },
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
.sectionthree {
  margin-top: 120px;
  padding-bottom: 120px;
}
.sectionthree__image {
  padding-right: 60px;
}
.sectionthree__image img {
  border-radius: 12px;
}
.sectionthree__image .img--frame1 {
  width: 345px;
  margin-left: 60px;
  left: 235px;
}
.sectionthree__image .img--frame2 {
  top: -40px;
  position: absolute;
  width: 119px;
  right: 0px;
  left: 330px;
}
.sectionthree__text {
  color: rgba(49, 53, 59, 0.68);
}
.sectionthree__text p {
  margin: 0 0 25px;
  line-height: 30px;
}
.sectionthree__text h2 {
  color: rgba(49, 53, 59, 0.96) !important;
  font-weight: 600 !important;
  font-size: 30px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  position: relative;
}
.sectionthree__text h2::after {
  background-color: rgb(81, 172, 68);
  bottom: -5px;
  content: "";
  display: block;
  height: 3px;
  left: 65px;
  position: absolute;
  transform: translate(-50%, 0);
  width: 127px;
}
</style>
