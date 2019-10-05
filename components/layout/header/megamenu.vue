<template>
  <div class="megamenu">
    <div class="megamenu__content">
      <div class="megamenu__body">
        <h2>Megamenu</h2>
        <div class="megamenu__body__left">
          <ul>
            <li v-for="(menu, index) in menus" :key="index">
              <a v-bind:href="'/' + menu.link">{{ menu.title }}</a>
            </li>
          </ul>
        </div>
        <div class="megamenu__body__right">
          <ul>
            <li v-for="(menu, index) in menus" :key="index">
              <div class="megamenu__body__right_submenu">
                <i class="icon-users" />
                <a v-bind:href="'/' + menu.link">{{ menu.title }}</a>
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
  name: "Sertifikasi",
  props: {
    menus: {
      type: Array,
      required: true
      // default: 'Lucas'
    }
  }
}
</script>
