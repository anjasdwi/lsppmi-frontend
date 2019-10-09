<template>
  <div class="sectionthirten">
    <a-row type="flex" justify="center" align="middle">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" class="sectionthirten__text">
        <p>
          <slot />
        </p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "SectionThirteen",
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
.sectionthirten {
  margin-top: 120px;
  padding-bottom: 50px;
}
.sectionthirten__image {
  text-align: center;
}
.sectionthirten__image img {
  border-radius: 12px;
  max-height: 70px;
}
.sectionthirten__text {
  color: rgba(49, 53, 59, 0.68);
  text-align: justify;
}
.sectionthirten__text p {
  margin: 0 0 25px;
  line-height: 30px;
  padding: 0px 75px;
}
.sectionthirten__text h2 {
  color: rgba(49, 53, 59, 0.96) !important;
  font-weight: 600 !important;
  font-size: 30px;
  margin: 0 0 10px;
  padding: 0 0 10px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  position: relative;
  padding-top: 15px;
}
.sectionthirten__text h2::after {
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
.sectionthirten__text a {
  padding: 3px 5px;
}

@media (max-width: 575.98px) {
}

@media (max-width: 767.98px) {
  .sectionthirten__text p {
    padding: 0px 0px;
  }
}

@media (max-width: 991.98px) {
  .sectionthirten__image {
    text-align: left;
  }
}

@media (max-width: 1199.98px) {
}
</style>
