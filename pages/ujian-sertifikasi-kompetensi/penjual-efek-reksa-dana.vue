<template>
  <LayoutPublic>
    <SectionFive
      classProps="header-location header-manajerinvestasi header-usk"
      title="Penjual Efek Reksa Dana"
    />
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionFive from "~/components/layout/section/section-05"

export default {
  components: { LayoutPublic, SectionFive },
  data() {
    return {}
  },
  head() {
    return {
      title: "LSPPMI | Ujian Sertifikasi Kompetensi - Penjual Efek Reksa Dana",
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
