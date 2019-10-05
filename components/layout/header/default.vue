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
                      <a href="#" @click="onActiveMenu('about')">
                        <span>Tentang Kami</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" @click="onActiveMenu('certification')">
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
  </div>
</template>

<script>
export default {
  name: "HeaderDefault",
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      token: this.$cookies.get("lsppmi--token")
    }
  },
  methods: {
    onActiveMenu: function(menu) {
      this.activeMenu = menu
      return this.activeMenu
    }
  }
}
</script>
