<template>
  <div id="Header_wrapper" class="bg-parallax" data-enllax-ratio="0.3">
    <header id="Header">
      <div class="header_placeholder" />
      <div id="Top_bar">
        <div class="container">
          <div class="column one">
            <div class="top_bar_left clearfix">
              <div class="logo">
                <nuxt-link
                  id="logo"
                  to="/"
                  title="BeCompany 2 - BeTheme"
                  data-height="60"
                  data-padding="30"
                >
                  <img
                    class="logo-main scale-with-grid"
                    :src="logo"
                    :data-retina="logo"
                    data-height="40"
                    alt="company2"
                    style="max-height: 60px;"
                  />
                  <img
                    class="logo-sticky scale-with-grid"
                    :src="logo"
                    :data-retina="logo"
                    data-height="40"
                    alt="company2"
                  />
                  <img
                    class="logo-mobile scale-with-grid"
                    :src="logo"
                    :data-retina="logo"
                    data-height="40"
                    alt="company2"
                    style="max-height:45px;left:-5px;position:absolute;top:16px;"
                  />
                  <img
                    class="logo-mobile-sticky scale-with-grid"
                    :src="logo"
                    :data-retina="logo"
                    data-height="40"
                    alt="company2"
                    style="max-height: 30px;left:-5px;position:absolute;top:13px;"
                  />
                </nuxt-link>
              </div>
              <div class="menu_wrapper">
                <nav id="menu">
                  <ul id="menu-main-menu" class="menu menu-main">
                    <li>
                      <nuxt-link to="/">
                        <span>Home</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <a href="#" v-on:click="onActiveMenu('about')">
                        <span>Tentang Kami</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" v-on:click="onActiveMenu('certification')">
                        <span>Ujian Sertifikasi Kompetensi</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"><span>Hubungi Kami</span></a>
                    </li>
                  </ul>
                </nav>
                <a class="responsive-menu-toggle" href="#">
                  <font-awesome-icon :icon="['fas', 'bars']" />
                </a>
              </div>
            </div>
            <div class="top_bar_right">
              <div class="top_bar_right_wrapper">
                <nuxt-link class="action_button" to="/login">
                  {{ token ? "Akun Saya" : "Login" }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-if="showMenu">
      <Sertifikasi :menus="menu" />
    </div>
  </div>
</template>
<script>
// #NOTE: Import Mega Menu
import Sertifikasi from "./megamenu"

const menuAbout = [
  {
    title: "About",
    link: "#"
  },
  {
    title: "About",
    link: "#"
  },
  {
    title: "About",
    link: "#"
  },
  {
    title: "About",
    link: "#"
  }
]

const menuCertification = [
  {
    title: "Sertifikasi",
    link: "#"
  },
  {
    title: "Sertifikasi",
    link: "#"
  }
]

export default {
  name: "HeaderDefault",
  components: {
    Sertifikasi
  },
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      menu: "",
      activeMenu: "",
      showMenu: false,
      token: this.$cookies.get("lsppmi--token")
    }
  },
  methods: {
    onActiveMenu: function(menu) {
      switch (menu) {
        case "about":
          this.menu = menuAbout
          break
        case "certification":
          this.menu = menuCertification
          break
      }

      this.activeMenu = menu
      this.showMenu = true
    }
  }
}
</script>
