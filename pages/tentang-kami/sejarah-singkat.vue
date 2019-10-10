<template>
  <LayoutPublic>
    <SectionFour title="Sejarah Singkat">
      Didirikan sesuai dengan akte Notaris No. 37 pada tanggal 27 Nopember 2018
      oleh Notaris Fathiah Helmi dan Keputusan Menteri Hukum dan Hak Azazi
      Manusia Republik Indonesia No. AHU-0016731.AH.01.04 Tahun 2018.
    </SectionFour>
    <SectionFive
      classProps="header-sejarah"
      title="Sejarah Singkat LSPPMI "
      style="margin-top:150px"
    />
    <SectionThirten
      image="https://storage.googleapis.com/lsppmi/assets/frontend/logo.png"
      title="Sejarah Singkat LSPPMI"
      style="padding-top:30px; margin-top: 10px;"
    >
      {{ sejarah[0].description }}
    </SectionThirten>
    <SectionTen title="" style="padding-top:70px; margin-bottom: 50px;">
      {{ sejarah[1].description }}
    </SectionTen>
    <SectionThirten
      image="https://storage.googleapis.com/lsppmi/assets/frontend/logo.png"
      title="Sejarah Singkat LSPPMI"
      style="padding-top:30px; margin-top: 10px;"
    >
      {{ sejarah[2].description }}
    </SectionThirten>
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionFour from "~/components/layout/section/section-04"
import SectionFive from "~/components/layout/section/section-05"
import SectionTen from "~/components/layout/section/section-10"
import SectionThirten from "~/components/layout/section/section-13"

const sejarah = [
  {
    description:
      "Berawal dari keinginan mewujudkan Sumber (SDM) di Pasar Modal yang berkompeten, berkualitas dan berdaya saing di tingkat nasional dan internasional, dan adanya ketentuan pembentukan lembaga sertifikasi profesi sesuai Pedoman Badan Nasional Sertifikasi Profesi (BNSP) dan UU No 13 Tahun 2003 tentang Ketenagakerjaan, maka dibentuklah Lembaga Sertifikasi Profesi Pasar Modal Indonesia (LSPPMI) oleh Asosiasi baik Industri/ Perusahaan maupun Profesi di bidang Pasar Modal Indonesia sebagai pendiri. Adapun asosiasi pendiri tersebut adalah Perkumpulan Perhimpunan Perusahaan Efek Indonesia (PPPEI/ APEI), Perkumpulan Profesi Pasar Modal Indonesia (PROPAMI), Perkumpulan Wakil Manajer Investasi Indonesia (PWMII), dan Perkumpulan Manajer Investasi Indonesia (PMII/AMII) serta Yayasan Peespe Pasar Modal / Panitia Standar Profesi Pasar Modal (PSPPM) dan The Indonesia Capital Market Institute (TICMI) sebagai narasumber utama."
  },
  {
    description:
      "LSPPMI didirikan sesuai dengan akte Notaris No. 37 pada tanggal 27 Nopember 2018 oleh Notaris Fathiah Helmi dan Keputusan Menteri Hukum dan Hak Azazi Manusia Republik Indonesia No. AHU-0016731.AH.01.04 Tahun 2018 tentang Pengesahan Pendiri Badan Hukum Yayasan Lembaga Sertifikasi Profesi Pasar Modal Indonesia."
  },
  {
    description:
      "LSPPMI dibentuk untuk mewujudkan Sumber Daya Manusia (SDM) di Pasar Modal yang berkualitas dan berdaya saing di tingkat nasional dan internasionaldan didukung oleh beberapa asosiasi profesi dan asosiasi industri yakni APEI, PROPAMI, PWMII, dan PMII dengan maksud dan tujuan sesuai dengan yang tertulis pada akte Notaris dimaksud. Maksud dan tujuan dari pendirian LSPPMI sesuai dengan Pasal 2 dan Pasal 3 Anggaran Dasar Yayasan Lembaga Sertifikasi Profesi Pasar Modal Indonesia."
  }
]
export default {
  components: {
    LayoutPublic,
    SectionFour,
    SectionFive,
    SectionTen,
    SectionThirten
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
