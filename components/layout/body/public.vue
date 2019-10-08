<template>
  <div class="body_public">
    <div class="body_public_child">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyPrivate",
  data() {
    return {}
  }
}
</script>

<style>
.body_public {
  background: #f5f6fa;
  margin-top: -10px;
  padding-top: 90px;
}
.body_public_child {
  margin: 0 auto;
  max-width: 1145px;
  padding: 25px 10px;
  padding-right: 0;
}
@media (max-width: 1024px) {
  .body_public_child {
    padding-left: 70px;
    padding-right: 65px;
  }
}
@media (max-width: 768px) {
  .body_public_child {
    padding-left: 55px;
    padding-right: 50px;
  }
}
@media (max-width: 425px) {
  .body_public {
    padding-top: 0px;
    transform: translateY(-4px);
  }
  .body_public_child {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
