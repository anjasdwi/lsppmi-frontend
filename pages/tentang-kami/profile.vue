<template>
  <LayoutPublic>
    <SectionFour title="Lorem Ipsum">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </SectionFour>
    <SectionFourteen
      image="https://storage.googleapis.com/lsppmi/assets/frontend/logo.png"
      title="Profile LSPPMI"
      style="padding-top:30px;"
    >
      Lembaga Sertifikasi Profesi Pasar Modal Indonesai (LSPPMI) adalah lembaga
      pelaksana kegiatan sertifikasi kompetensi kerja di bidang Pasar Modal yang
      mendapat lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) dan
      didirikan oleh asosiasi profesi dan asosiasi industri di bidang pasar
      modal
    </SectionFourteen>
    <SectionTen title="Visi" style="padding-top:70px;">
      Menjadi Lembaga Sertifikasi Profesi Pasar Modal Indonesia yang terpercaya,
      berkualitas dan handal dalam mewujudkan sumber daya manusia pasar modal
      yang professional, berkompetensi tinggi, dan berintegritas serta mampu
      bersaing dengan pelaku di Pasar Modal Nasional maupun internasional.
    </SectionTen>
    <SectionFive classProps="header-visi" title="Misi" />
    <SectionEleven
      style="padding-top:0px; margin-bottom: 60px;"
      :datas="datas"
      :lg="8"
    />
    <div id="maksuddantujuan" style="height: 100px;margin-top: -170px;">
      &nbsp;
    </div>
    <SectionFive classProps="header-maksud" title="Maksud dan Tujuan" />
    <SectionTwelve
      style="padding-top:0px; margin-bottom: 60px;"
      :datas="datasMaksud"
    />
  </LayoutPublic>
</template>

<script>
const misi = [
  {
    description:
      "Mendorong terciptanya sumber daya manusia yang professional dan kompeten di bidang pasar modal melalui uji kompetensi yang berstandar tinggi dan diakui baik nasional maupun internasional."
  },
  {
    description:
      "Menetapkan dan melaksanakan kebijakan, prosedur dan administrasi lembaga sertifikasi yang memenuhi semua persyaratan dan peraturan perundang-undangan yang berlaku, secara jujur dan wajar"
  },
  {
    description:
      "Memberikan pelayanan uji kompetensi dengan mengutamakan mutu dan kepuasan peserta termasuk pemangku kepentingan, serta menjamin terlaksananya sistem pengujian yang sistematis, objektif, teliti, cepat, tepat dan akurat serta efisien."
  }
]

const maksud = [
  {
    description:
      "Melaksanakan Sertifikasi Kompetensi Kerja di Bidang Pasar Modal berdasarkan Standar Kompetensi Kerja Nasional Indonesia dan ketentuan Badan Nasional Sertifikasi Profesi."
  },
  {
    description:
      "Membina kerjasama dengan Lembaga Sertifikasi Profesi lainnya baik Nasional ataupun Internasional"
  },
  {
    description:
      "Meningkatkan kualitas dan kuantitas SDM khususnya di sector Pasar Modal Indonesia yang kompeten, beretika dan berdaya saing."
  },
  {
    description:
      "Menghasilkan tenaga kerja SDM di bidang Pasar Modal Indonesia yang kompeten yang mampu memelihara kompetensinya."
  },
  {
    description:
      "Meningkatkan SDM Pasar Modal Indonesia yang mampu berdaya saing di tingkat Internasional."
  },
  {
    description:
      "Mengelola dan mengembangkan system sertifikasi kompetensi kerja yang obyektif dan transparan."
  },
  {
    description:
      "Mewujudkan pengakuan sertifikasi kompetensi SDM di bidang Pasar Modal Indonesia di tingkat Internasional."
  }
]
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionFour from "~/components/layout/section/section-04"
import SectionFourteen from "~/components/layout/section/section-14"
import SectionFive from "~/components/layout/section/section-05"
import SectionTen from "~/components/layout/section/section-10"
import SectionEleven from "~/components/layout/section/section-11"
import SectionTwelve from "~/components/layout/section/section-12"

export default {
  components: {
    LayoutPublic,
    SectionFour,
    SectionFourteen,
    SectionFive,
    SectionTen,
    SectionEleven,
    SectionTwelve
  },
  data() {
    return {
      datas: misi,
      datasMaksud: maksud
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
.header-visi::before {
  content: "Visi" !important;
}
.header-maksud::before {
  content: "Maksud dan Tujuan" !important;
}
</style>
