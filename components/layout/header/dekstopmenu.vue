<template>
  <nav id="menu">
    <ul id="menu-main-menu" class="menu menu-main">
      <li v-for="(menu, index) in menus" :key="index">
        <a
          v-if="menu.childMenu"
          href="#"
          v-on:click="onActiveMenu(menu.parentMenu)"
        >
          <span>{{ menu.parentMenu }}<i class="icon-down-dir"/></span>
        </a>
        <nuxt-link v-else v-bind:to="menu.link">
          <span>{{ menu.parentMenu }}</span>
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link
          class="action_button login_btn"
          to="/login"
          style="color: white !important;"
        >
          {{ token ? "Akun Saya" : "Login" }}
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Dekstopmenu",
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      token: this.$cookies.get("lsppmi--token")
    }
  },
  props: {
    menus: {
      type: Array,
      required: true
      // default: "Megamenu"
    }
  },
  methods: {
    onActiveMenu: function(target) {
      this.$emit("onActiveMenu", target)
    }
  }
}
</script>
