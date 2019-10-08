<template>
  <LayoutPublic>
    Penutup
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"

export default {
  components: { LayoutPublic },
  data() {
    return {}
  },
  head() {
    return {
      title: "LSPPMI | Tentang Kami - Penutup",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lembaga Sertifikasi Profesi Pasar Modal"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: ""
        }
      ]
    }
  }
}
</script>
