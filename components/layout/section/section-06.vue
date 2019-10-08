<template>
  <div class="section_six">
    <img :src="decoration" alt="Decoration" class="section_six__decoration" />
    <div class="section_six__banner-container">
      <div class="section_six__banner">
        <img :src="banner" alt="" class="section_six__banner-image" />
      </div>
      <div class="section_six__copyw">
        <div class="section_six__box-green" />
        <div class="section_six__liner" />
        <div class="section_six__title-top">
          <span>{{ title }}</span>
        </div>
        <div class="section_six__title-big">
          <span>{{ subtitle }}</span>
        </div>
        <div class="section_six__desc">
          <span>
            <slot />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionSix",
  props: {
    banner: {
      type: String,
      required: true,
      default: ""
    },
    subtitle: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      decoration: `${process.env.storage}/decorations/decoration-01.png`
    }
  }
}
</script>

<style>
@media (min-width: 1200px) {
  .section_six__banner-container {
    max-width: 1200px;
  }
}
@media (max-width: 1024px) {
  /* .section_six .section_six__decoration {
    display: none;
  }
  .section_six__banner-container {
    margin-left: 53px !important;
  } */
  /* .section_six__copyw {
    width: 65% !important;
  } */
}
@media (min-width: 992px) {
  .section_six__banner-container {
    max-width: 970px;
  }
}
@media (min-width: 768px) {
  .section_six__banner-container {
    max-width: 750px;
    padding-right: 15px;
    padding-left: 15px;
  }
  /* .section_six__banner-container {
    margin-left: 15px !important;
  } */
}
.section_six {
  -webkit-box-align: center;
  align-items: center;
  background: #f5f6fa;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.section_six .section_six__decoration {
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  position: absolute;
  top: 0px;
  z-index: 2;
}
.section_six__banner-container {
  margin-left: 125px;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  width: 100%;
}
.section_six .section_six__banner {
  left: 59%;
  position: absolute;
  top: 0px;
  width: 100%;
}
.section_six .section_six__banner-image {
  max-width: 100%;
}
.section_six .section_six__copyw {
  padding: 40px 50px 40px 0px;
  position: relative;
  width: 75%;
  z-index: 1;
}
.section_six .section_six__box-green {
  background-image: linear-gradient(#51ac44, rgb(0, 181, 68));
  height: 782px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100vw;
  z-index: -1;
}
.section_six .section_six__liner {
  background: #fff;
  height: 2px;
  width: 78px;
  z-index: 1;
}
.section_six .section_six__title-top {
  color: rgba(255, 255, 255, 0.8);
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 3.11px;
  line-height: 2.86;
  margin-top: 14px;
  z-index: 1;
}
.section_six .section_six__title-big {
  color: rgb(255, 255, 255);
  font-family: "Nunito Sans", sans-serif;
  font-size: 38px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 1.18;
  margin-top: 4px;
  z-index: 1;
}
.section_six .section_six__desc {
  color: rgb(255, 255, 255);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 2.5;
  margin-top: 16px;
  z-index: 1;
}
</style>
