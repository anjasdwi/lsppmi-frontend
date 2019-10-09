<template>
  <LayoutPublic>
    <SectionFour />
    <SectionTwo />
    <SectionThree />
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionTwo from "~/components/layout/section/section-02"
import SectionFour from "~/components/layout/section/section-04"
import SectionThree from "~/components/layout/section/section-03"

export default {
  components: {
    LayoutPublic,
    SectionTwo,
    SectionFour,
    SectionThree
  },
  data() {
    return {}
  },
  head() {
    return {
      title: "LSPPMI | Hubungi Kami",
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
