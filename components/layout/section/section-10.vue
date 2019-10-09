<template>
  <div class="sectionten">
    <a-row type="flex" justify="center" align="middle">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" class="sectionten__text">
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
  name: "SectionTen",
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
.sectionten {
  border: 1px solid rgb(83, 174, 73);
  border-radius: 8px;
  padding-top: 0px !important;
  margin-bottom: 100px;
}
.sectionten__image {
  padding-right: 100px;
}
.sectionten__image img {
  border-radius: 12px;
}
.sectionten__text {
  padding: 51px 75px;
  background: rgb(83, 174, 73);
  color: rgb(255, 255, 255);
}
.sectionten__text {
  padding: 51px 75px;
  background: rgb(83, 174, 73);
  color: rgb(255, 255, 255);
}
.sectionten__text p {
  margin: 0 0 25px;
  line-height: 30px;
}
.sectionten__text h2 {
  color: rgb(255, 255, 255) !important;
  font-weight: 600 !important;
  font-size: 30px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  position: relative;
}
.sectionten__text h2::after {
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
.sectionten__text a {
  padding: 3px 5px;
}
</style>
