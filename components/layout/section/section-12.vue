<template>
  <div class="sectiontwelve">
    <a-row type="flex" justify="center" align="top">
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        v-for="(data, index) in datas"
        :key="index"
        class="sectiontwelve__text"
      >
        <h2>{{ index + 1 }}</h2>
        <a-row
          type="flex"
          justify="center"
          align="middle"
          class="sectiontwelve__text__box"
        >
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="24"
            class="sectiontwelve__paragraph"
          >
            {{ data.description }}
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "SectionTwelve",
  props: {
    datas: {
      type: Array,
      required: true
      // default: []
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
.sectiontwelve {
  margin-top: 50px;
  padding-bottom: 120px;
}
.sectiontwelve__text {
  color: rgba(49, 53, 59, 0.68);
  padding: 15px 30px;
}
.sectiontwelve__text h2 {
  color: rgb(230, 64, 38) !important;
  font-weight: 600 !important;
  font-size: 66px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  position: absolute;
  top: -26px;
  left: 16px;
  text-shadow: 2px 2px 7px #721313;
}
.sectiontwelve__text__box {
  padding: 30px 40px;
  background: rgb(83, 174, 73);
  min-height: 165px;
  text-align: center;
  color: rgba(255, 255, 255, 0.81);
  border-radius: 5px;
}
.sectiontwelve__text p {
  margin: 0 0 25px;
  line-height: 30px;
}

@media (max-width: 575.98px) {
  .sectiontwelve__text {
    padding: 15px 10px;
  }
}

@media (max-width: 767.98px) {
}

@media (max-width: 991.98px) {
}

@media (max-width: 1199.98px) {
}
</style>
