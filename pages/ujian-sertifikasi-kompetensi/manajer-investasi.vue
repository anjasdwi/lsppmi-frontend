<template>
  <LayoutPublic>
    <SectionFive
      classProps="header-location header-manajerinvestasi"
      title="Manajer Investasi"
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
      title: "LSPPMI | Ujian Sertifikasi Kompetensi - Manajer Investasi",
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
.header-manajerinvestasi {
  margin-bottom: 150px !important;
}
.header-manajerinvestasi::before {
  content: "Ujian Sertifikasi Kompetensi";
}
@media (max-width: 425px) {
  .header-manajerinvestasi {
    margin-top: 100px !important;
  }
}
</style>
