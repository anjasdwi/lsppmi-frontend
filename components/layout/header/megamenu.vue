<template>
  <div class="megamenu">
    <div class="megamenu__content" @mouseleave="onMouseLeave">
      <div class="megamenu__body">
        <div class="megamenu__body__left">
          <h2>{{ titleMenus }}</h2>
        </div>
        <div
          :class="{
            'megamenu__body__right--ujian':
              titleMenus == 'Ujian Sertifikasi Kompetensi',
            'megamenu__body__right--tentang': titleMenus == 'Tentang Kami'
          }"
        >
          <ul>
            <li v-for="(menu, index) in menus" :key="index">
              <div class="megamenu__body__right_submenu">
                <i class="icon-right-open" />
                <nuxt-link :to="menu.link">
                  <span v-on:click="onMouseLeave">{{ menu.title }}</span>
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Megamenu",
  props: {
    menus: {
      type: Array,
      required: true
      // default: "Megamenu"
    },
    titleMenus: {
      type: String,
      required: true,
      default: "Megamenu"
    }
  },
  methods: {
    onMouseLeave: function() {
      this.$emit("onMouseLeave")
    }
  }
}
</script>
