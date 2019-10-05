<template>
  <div id="Side_slide" class="right dark" data-width="280">
    <div class="close-wrapper">
      <a href="#" class="close">
        <font-awesome-icon :icon="['fas', 'times']" />
      </a>
    </div>
    <div class="extras">
      <nuxt-link
        class="action_button"
        to="/pendaftaran"
        @click="onClickLogin()"
      >
        Login
      </nuxt-link>
      <div class="extras-wrapper" />
    </div>
    <div class="menu_wrapper" />
  </div>
</template>

<script>
export default {
  name: "HeaderDefaultMobile",
  data() {
    return {
      logo: `${process.env.storage}/logo.png`
    }
  },
  methods: {
    onClickLogin: function() {
      console.log("onClickLogin")
    }
  }
}
</script>
