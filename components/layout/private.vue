<template>
  <div class="background_white">
    <HeaderDefault />
    <BodyPrivate>
      <slot />
    </BodyPrivate>
    <FooterDefault />
    <HeaderDefaultMobile />
    <div id="body_overlay" />
  </div>
</template>

<script>
import BodyPrivate from "~/components/layout/body/private"
import FooterDefault from "~/components/layout/footer/default"
import HeaderDefault from "~/components/layout/header/default"
import HeaderDefaultMobile from "~/components/layout/header/mobile"

export default {
  name: "LayoutPrivate",
  components: {
    BodyPrivate,
    FooterDefault,
    HeaderDefault,
    HeaderDefaultMobile
  },
  data() {
    return {}
  }
}
</script>
