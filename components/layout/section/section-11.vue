<template>
  <div class="sectioneleven">
    <a-row type="flex" justify="center" align="top">
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="lg"
        v-for="(data, index) in datas"
        :key="index"
        class="sectioneleven__text"
      >
        <h2>{{ index + 1 }}</h2>
        <p>
          {{ data.description }}
        </p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "SectionEleven",
  props: {
    datas: {
      type: Array,
      required: true
      // default:
    },
    lg: {
      type: Number,
      required: false
      // default: ""
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
.sectioneleven {
  margin-top: 50px;
  padding-bottom: 70px;
}
.sectioneleven__text {
  color: rgba(49, 53, 59, 0.68);
  padding: 0px 30px;
}
.sectioneleven__text p {
  margin: 0 0 25px;
  line-height: 30px;
}
.sectioneleven__text h2 {
  color: rgba(83, 174, 72, 0.1) !important;
  font-weight: 600 !important;
  font-size: 66px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  position: relative;
  position: absolute;
  top: -60px;
  left: 7px;
}
</style>
