<template>
  <div class="background_white">
    <HeaderDefault />
    <BodyPrivate>
      Ganti Email
    </BodyPrivate>
    <FooterDefault />
    <HeaderDefaultMobile />
    <div id="body_overlay" />
  </div>
</template>

<script>
// #NOTE: Import Layout
import BodyPrivate from "~/components/layout/body/private"
import FooterDefault from "~/components/layout/footer/default"
import HeaderDefault from "~/components/layout/header/default"
import HeaderDefaultMobile from "~/components/layout/header/mobile"

export default {
  middleware: "authenticated",
  components: {
    BodyPrivate,
    FooterDefault,
    HeaderDefault,
    HeaderDefaultMobile
  },
  data() {
    return {}
  },
  head() {
    return {
      title: "Dashboard Member LSPPM",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dashboard Member LSPPM"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Dashboard Member twitter:card"
        }
      ]
    }
  }
}
</script>
