<template>
  <LayoutPublic>
    <SectionFour title="Legalitas dan Lisensi">
      Kami telah memperoleh lisensi dari BNSP melalui SK No. KEP xxx /BNSP /xx
      /20xx untuk mengembangkan dan melaksanakan Sertifikasi kompetensi kerja
      industri pasar modal di Indonesia.
    </SectionFour>
    <SectionThree
      image1="https://ticmi.co.id/upload/gallery/2018/launching-sertifikasi-dan-spm-online-ticmi-2018.jpg"
      image2="https://ticmi.co.id/upload/gallery/2018/ticmi-corner-di-idx-chanel-ticmi-2018.jpg"
      title="Legalitas dan Lisensi"
      style="padding-bottom: 0px; margin-top:150px"
    >
      {{ sejarah[0].description }}
    </SectionThree>
    <SectionThirten
      image="https://storage.googleapis.com/lsppmi/assets/frontend/logo.png"
      title="Sejarah Singkat LSPPMI"
      style="padding-top:30px; margin-top: 10px; padding-bottom: 0px;"
    >
      {{ sejarah[1].description }}
    </SectionThirten>
    <SectionThirten
      image="https://storage.googleapis.com/lsppmi/assets/frontend/logo.png"
      title="Sejarah Singkat LSPPMI"
      style="padding-top:20px; margin-top: 10px;"
    >
      {{ sejarah[2].description }}
    </SectionThirten>
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionFour from "~/components/layout/section/section-04"
import SectionThirten from "~/components/layout/section/section-13"
import SectionThree from "~/components/layout/section/section-03"

const sejarah = [
  {
    description:
      "Kehadiran LSPPMI merupakan keinginan sekaligus hasil dukungan para pelaku bisnis pasar modal di Indonesia, dan merupakan upaya menciptakan industri pasar modal yang kuat, memiliki daya saing yang tinggi serta memiliki ketahanan dalam menghadapi risiko. Guna mewujudkan keinginan dimaksud diperlukan standar baku kompetensi kerja dengan tujuan terciptanya kesetaraan dan peningkatan profesionalitas di bidang pasar modal."
  },
  {
    description:
      "Sertifikasi kompetensi kerja di Indonesia diatur Badan Nasional Sertifikasi Profesi (BNSP), BNSP merupakan lembaga independen yang dibentuk berdasarkan Peraturan Pemerintah No. 23 Tahun 2004 untuk mengatur sertifikasi kompetensi kerja di Indonesia. Peraturan Pemerintah dimaksud merupakan pelaksanaan dari Undang Undang No. 13 Tahun 2003 tentang Ketenaga kerjaan. Sebagai regulator, BNSP memberikan lisensi kepada lembaga sertifikasi profesi (LSP) yang memenuhi persyaratan dan mengatur tata cara uji kompetensi."
  },
  {
    description:
      "Sertifikasi kompetensi kerja industri pasar modal di Indonesia dikembangkan dan dilaksanakan oleh Lembaga Sertifikasi Profesi Pasar Modal Indonesia (LSPPMI) yang telah memperoleh lisensi dari BNSP melalui SK No. KEP xxx /BNSP /xx /20xx tanggal."
  }
]
export default {
  components: {
    LayoutPublic,
    SectionFour,
    SectionThirten,
    SectionThree
  },
  data() {
    return {
      sejarah: sejarah
    }
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
<style>
.header-sejarah::before {
  content: "Sejarah Singkat" !important;
}
</style>
