<template>
  <div id="Header_wrapper" class="bg-parallax" data-enllax-ratio="0.3">
    <header id="Header">
      <div class="header_placeholder" />
      <div id="Top_bar">
        <div class="container top_bar_container">
          <div class="column one">
            <div class="top_bar_left clearfix">
              <div class="logo">
                <nuxt-link to="/">
                  <img class="header__logo" :src="logo" />
                </nuxt-link>
              </div>
              <div class="menu_wrapper">
                <Dekstopmenu :menus="allMenus" @onActiveMenu="onActiveMenu" />
                <a class="responsive-menu" v-on:click="onShowMobilemenus">
                  <font-awesome-icon :icon="['fas', 'bars']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-if="showMegamenu">
      <Megamenu
        :menus="menus"
        :titleMenus="titleMenus"
        @onMouseLeave="onMouseLeave"
      />
    </div>
    <div v-if="showMobilemenus">
      <Mobilemenu :menus="allMenus" @onShowMobilemenus="onShowMobilemenus" />
    </div>
  </div>
</template>
<script>
// #NOTE: Import Mega Menu
import Megamenu from "./megamenu"
import Mobilemenu from "./mobilemenu"
import Dekstopmenu from "./dekstopmenu"

const allMenus = [
  {
    parentMenu: "Home",
    link: "/"
  },
  {
    parentMenu: "Tentang Kami",
    childMenu: [
      {
        title: "Profil",
        link: "/tentang-kami/profile"
      },
      {
        title: "Maksud dan Tujuan",
        link: "/tentang-kami/maksud-dan-tujuan"
      },
      {
        title: "Sejarah Singkat",
        link: "/tentang-kami/sejarah-singkat"
      },
      {
        title: "Kebijakan Mutu",
        link: "/tentang-kami/kebijakan-mutu"
      },
      {
        title: "Penutup",
        link: "/tentang-kami/penutup"
      }
    ]
  },
  {
    parentMenu: "Ujian Sertifikasi Kompetensi",
    childMenu: [
      {
        title: "Perantara Pedagang Efek Pemasaran Terbatas",
        link:
          "/ujian-sertifikasi-kompetensi/prerantara-pedagang-efek-pemasaran-terbatas"
      },
      {
        title: "Penjual Efek Reksa Dana",
        link: "/ujian-sertifikasi-kompetensi/penjual-efek-reksa-dana"
      },
      {
        title: "Perantara Pedagang Efek Pemasaran",
        link: "/ujian-sertifikasi-kompetensi/perantara-pedagang-efek-pemasaran"
      },
      {
        title: "Perantara Pedagang Efek",
        link: "/ujian-sertifikasi-kompetensi/perantara-pedagang-efek"
      },
      {
        title: "Penjamin Emisi Efek",
        link: "/ujian-sertifikasi-kompetensi/penjamin-emisi-efek"
      },
      {
        title: "Manajer Investasi",
        link: "/ujian-sertifikasi-kompetensi/manajer-investasi"
      }
    ]
  },
  {
    parentMenu: "Hubungi Kami",
    link: "/hubungi-kami"
  }
]

export default {
  name: "HeaderDefault",
  components: {
    Megamenu,
    Mobilemenu,
    Dekstopmenu
  },
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      menus: "",
      titleMenus: "",
      showMegamenu: false,
      showMobilemenus: false,
      allMenus: allMenus,
      token: this.$cookies.get("lsppmi--token")
    }
  },
  methods: {
    onActiveMenu: function(menus) {
      this.titleMenus = menus
      switch (menus) {
        case "Tentang Kami":
          this.menus = this.allMenus[1].childMenu
          break
        case "Ujian Sertifikasi Kompetensi":
          this.menus = this.allMenus[2].childMenu
          break
      }
      this.showMegamenu = true
    },
    onMouseLeave: function() {
      this.showMegamenu = false
    },
    onShowMobilemenus: function() {
      this.showMobilemenus = !this.showMobilemenus
    }
  }
}
</script>
