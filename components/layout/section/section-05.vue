<template>
  <div class="section_five">
    <h2 :class="classProps">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SectionFive",
  props: {
    classProps: {
      type: String,
      required: true,
      default: ""
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
@media (min-width: 1201px) {
  .section_five > h2::before {
    font-size: 250px;
  }
}
@media (min-width: 993px) {
  .section_five > h2::before {
    font-size: 120px;
  }
}
@media (min-width: 768px) {
  .section_five > h2 {
    font-size: 40px;
  }
  .section_five > h2::before {
    top: 0px;
    left: 50%;
    font-size: 100px;
  }
  .section_five > h2::after {
    width: 78px;
  }
}
.section_five {
  padding: 25px 0px;
}
.section_five > h2::before {
  color: #efefef;
  font-family: "Nunito Sans", sans-serif;
  font-size: 80px;
  font-weight: 800;
  line-height: 0.3;
  left: 0;
  position: absolute;
  text-align: center;
  transform: translateX(0%);
  white-space: nowrap;
  width: 100%;
  z-index: -1;
}
.section_five > h2 {
  color: rgba(49, 53, 59, 0.96);
  font-size: 28px;
  font-weight: 800;
  line-height: 1.35;
  position: relative;
  text-align: center;
  z-index: 1;
}
.section_five > h2::after {
  background: #51ac44;
  bottom: -10px;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 40px;
}
@media (max-width: 425px) {
  .section_five {
    padding: 0;
  }
  .section_five > h2::before {
    bottom: 10px;
    font-size: 40px;
  }
}
</style>
