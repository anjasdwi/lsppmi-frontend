<template>
  <div class="sectiontwo">
    <a-row type="flex" justify="center" align="middle">
      <a-col :xs="24" :sm="24" :md="24" :lg="12" class="sectiontwo__image">
        <img :src="image" />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" class="sectiontwo__text">
        <h2>{{ title }}</h2>
        <p>
          <slot />
        </p>
        <nuxt-link
          class="button button_size_2 button_theme button_js"
          :to="link"
        >
          <span class="button_label">{{ btnName }}</span>
        </nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
  props: {
    btnName: {
      type: String,
      required: true,
      default: ""
    },
    image: {
      type: String,
      required: true,
      default: ""
    },
    link: {
      type: String,
      required: true,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style>
.border {
  border: 1px solid gray;
}
.sectiontwo {
  margin-top: 120px;
  padding-bottom: 120px;
}
.sectiontwo__image {
  padding-right: 60px;
}
.sectiontwo__image img {
  border-radius: 12px;
}
.sectiontwo__text {
  color: rgba(49, 53, 59, 0.68);
  padding: 30px 0px;
}
.sectiontwo__text p {
  margin: 0 0 25px;
  line-height: 30px;
}
.sectiontwo__text h2 {
  color: rgba(49, 53, 59, 0.96) !important;
  font-weight: 600 !important;
  font-size: 30px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  position: relative;
}
.sectiontwo__text h2::after {
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
.sectiontwo__text a {
  padding: 3px 5px;
}
</style>
