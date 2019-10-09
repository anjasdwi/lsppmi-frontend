<template>
  <div class="sidenav" v-bind:class="{ 'sidenav--show': transitionShow }">
    <div class="sidenav__header">
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
          style="max-height: 50px;"
        />
      </nuxt-link>
      <span
        class="sidenav__header__close"
        v-on:click="onTransitionShow('change')"
      >
        ×
      </span>
    </div>
    <div class="sidenav__body">
      <div style="margin-top: 10px;">
        <div v-for="(menu, index) in menus" :key="index">
          <div v-if="menu.childMenu">
            <a-collapse accordion>
              <a-collapse-panel
                :key="index"
                v-bind:header="menu.parentMenu"
                class="sidenav__body__list"
              >
                <ul>
                  <li v-for="(child, index) in menu.childMenu" :key="index">
                    <nuxt-link :to="child.link">
                      <i class="icon-right-open" />{{ child.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <div v-else>
            <nuxt-link :to="menu.link">
              {{ menu.parentMenu }}
            </nuxt-link>
          </div>
        </div>
        <!-- <div class="sidenav__body__list__btn">
          <button>Login</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mobilemenu",
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      transitionShow: false
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
    onShowMobilemenus: function() {
      this.$emit("onShowMobilemenus")
    },
    onTransitionShow: function(method) {
      switch (method) {
        case "first":
          this.transitionShow = true
          break
        case "change":
          this.transitionShow = !this.transitionShow
          setTimeout(this.onShowMobilemenus, 1000)
          break
      }
    }
  },
  mounted() {
    setTimeout(
      function() {
        this.onTransitionShow("first")
      }.bind(this),
      100
    )
  }
}
</script>
