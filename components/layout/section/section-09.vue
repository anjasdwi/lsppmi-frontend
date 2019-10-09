<template>
  <div class="section mcb-section section_nine">
    <div class="section_wrapper mcb-section-inner">
      <div class="wrap mcb-wrap one valign-top clearfix">
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one-fourth column_placeholder">
            <div class="placeholder">
              &nbsp;
            </div>
          </div>
          <div class="column mcb-column one-second column_column">
            <div class="column_attr clearfix align_center">
              <h2>{{ title }}</h2>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(people, i) in peoples"
        class="wrap mcb-wrap one-third valign-top clearfix"
        style="padding:0 2%"
        :key="i"
      >
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one column_image">
            <div
              class="image_frame image_item no_link scale-with-grid aligncenter no_border"
            >
              <div class="image_wrapper">
                <img class="scale-with-grid" :src="people.image" />
              </div>
            </div>
          </div>
          <div class="column mcb-column one column_column">
            <div class="column_attr clearfix align_center">
              <h3 style="margin-bottom: 4px">{{ people.name }}</h3>
              <p>
                {{ people.occupation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionNine",
  data() {
    return {}
  },
  props: {
    description: {
      type: String,
      required: false,
      default: ""
    },
    peoples: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ""
    }
  }
}
</script>

<style>
.section_nine {
  background-color: #f4f6fd;
  padding-bottom: 60px;
  padding-top: 100px;
}
@media (max-width: 768px) {
  .section_nine {
    padding-bottom: 30px !important;
    padding-top: 30px !important;
  }
}
</style>
