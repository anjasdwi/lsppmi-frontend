<template>
  <div class="section mcb-section equal-height-wrap section_eight">
    <!-- IF Layout Left -->
    <div
      v-if="mode === 'left'"
      class="section_wrapper mcb-section-inner section_eight-container section_eight-container--left"
    >
      <div class="wrap mcb-wrap one-second valign-middle clearfix">
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one column_image">
            <div
              class="image_frame image_item no_link scale-with-grid aligncenter no_border"
            >
              <div class="image_wrapper">
                <img class="scale-with-grid" :src="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="wrap mcb-wrap one-second valign-middle clearfix"
        style="padding:0 0 0 5%"
      >
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one column_column">
            <div class="column_attr clearfix">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- IF Layout Right -->
    <div
      v-if="mode === 'right'"
      class="section_wrapper mcb-section-inner section_eight-container"
    >
      <div
        class="wrap mcb-wrap one-second valign-middle clearfix"
        style="padding:0 5% 0 0"
      >
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one column_column">
            <div class="column_attr clearfix">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <div class="wrap mcb-wrap one-second valign-middle clearfix">
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one column_image">
            <div
              class="image_frame image_item no_link scale-with-grid aligncenter no_border"
            >
              <div class="image_wrapper">
                <img class="scale-with-grid" :src="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionEight",
  props: {
    image: {
      type: String,
      required: true,
      default: ""
    },
    mode: {
      type: String,
      required: true,
      default: ""
    }
  }
}
</script>

<style>
.section_eight {
  padding-top: 100px;
  padding-bottom: 60px;
}
.section_eight-container {
  width: 100% !important;
}
@media (max-width: 768px) {
  .section_eight {
    padding-bottom: 30px !important;
    padding-top: 30px !important;
  }
}
@media (max-width: 428px) {
  .section_eight-container--left img {
    margin-bottom: 30px;
  }
}
</style>
