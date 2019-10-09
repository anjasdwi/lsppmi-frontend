<template>
  <LayoutPublic>
    <SectionFour title="Lorem Ipsum">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </SectionFour>
    <SectionFive
      classProps="header-kebijakan"
      title="Kebijakan Mutu LSPPMI"
      style="margin-top: 150px;"
    />
    <SectionEleven
      style="padding-top:0px; margin-bottom: 0px;"
      :datas="datas"
      :lg="12"
    />
    <SectionFive
      classProps="header-maksud"
      title="Untuk Mencapai Komitmen Tersebut LSPPMI Menetapkan"
    />
    <SectionTwelve
      style="padding-top:0px; margin-bottom: 60px;"
      :datas="datasKebijakan"
    />
  </LayoutPublic>
</template>

<script>
const kebijakan = [
  {
    description:
      "LSP Pasar Modal Indonesa akan selalu mengutamakan mutu dalam melaksanakan kegiatan Uji Kompetensi dengan cara menerapkan sistem manajemen mutu secara konsisten."
  },
  {
    description:
      "LSP Pasar Modal Indonesai akan selalu berusaha meningkatkan kemampuan sumber daya manusia dan teknologi sehingga akan menghasilkan proses sertifikasi yang berkualitas dan tidak ada keberpihakan dengan siapapun."
  }
]

const kebijakanMutu = [
  {
    description:
      "Mematuhi ketentuan Pedoman BNSP Nomor 201/ISO 17024, Pedoman BNSP Nomor 202, Pedoman BNSP Nomor 206, Pedoman BNSP Nomor 210 dan persyaratan lain yang relevan terkait dengan masalah mutu."
  },
  {
    description:
      "Menjamin semua asesor dan karyawan terkait kegiatan asesmen kompetensi mendapatkan pelatihan yang memadai sesuai dengan tugas-tugasnya guna dapat melaksanakan tugas-tugasnya sesuai dengan standar yang ditetapkan"
  },
  {
    description:
      "Menjadikan kebijakan ini sebagai kerangka acuan dalam penetapan tujuan dan sasaran mutu."
  },
  {
    description:
      "Mengkomunikasikan kebijakan ini kepada seluruh asesor dan karyawan serta pihak terkait lainnya dalam kegiatan asesmen untuk dapat dipahami."
  },
  {
    description:
      "Meningkatkan penerapan sistem manajemen mutu yang berkesinambungan."
  },
  {
    description:
      "Menjamin agar kebijakan mutu tersedia bagi publik yang memerlukannya."
  }
]
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionFour from "~/components/layout/section/section-04"
import SectionFive from "~/components/layout/section/section-05"
import SectionEleven from "~/components/layout/section/section-11"
import SectionTwelve from "~/components/layout/section/section-12"

export default {
  components: {
    LayoutPublic,
    SectionFour,
    SectionFive,
    SectionEleven,
    SectionTwelve
  },
  data() {
    return {
      datas: kebijakan,
      datasKebijakan: kebijakanMutu
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
.header-kebijakan::before {
  content: "Kebijakan mutu LSPPMI" !important;
}
</style>
