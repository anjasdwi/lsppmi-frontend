<template>
  <LayoutPublic>
    <SectionFive
      classProps="header-location header-manajerinvestasi header-usk"
      title="Perantara pedagang Efek Pemasaran"
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
      title:
        "LSPPMI | Ujian Sertifikasi Kompetensi - Perantara Pedagang Efek Pemasaran",
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
<style>
.header-usk::before {
  content: "Ujian Sertifikasi Kompetensi";
}
</style>
