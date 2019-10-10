<template>
  <LayoutPublic>
    <SectionFour title="Penutup">
      Kami akan turut mempersiapkan dan menyeleksi tenaga-tenaga profesional
      dalam menunjang perkembangan Pasar Modal di Indonesia.
    </SectionFour>
    <SectionFourteen
      image="https://ticmi.co.id/upload/gallery/2018/ticmi-corner-di-idx-chanel-ticmi-2018.jpg"
      title="Penutup"
      style="padding-top: 20px; padding-bottom: 0px;"
    >
      {{ datasPenutup[0].description }}
    </SectionFourteen>
    <SectionThirten
      v-for="(value, index) in datasPenutup"
      :key="index"
      title="Sejarah Singkat LSPPMI"
      style="padding-top:0px; margin-top: 0px; padding-bottom:0px;"
    >
      <span v-if="index !== 0">
        {{ value.description }}
      </span>
    </SectionThirten>
    <div class="aamiin">Aamiin</div>
  </LayoutPublic>
</template>

<script>
const penutup = [
  {
    description:
      "Pasar Modal masih akan berkembang secara terus-menerus sesuai dengan perkembangan perekonomian di dalam negeri maupun di dunia internasional. Demikian pula dunia ilmu pengetahuan dan praktek mengenai Pasar Modal akan terus berkembang pula sejalan dengan perkembangan ekonomi moneter dan bisnis secara global serta sesuai dengan kebutuhan dan inovasi yang selalu dikembangkan."
  },
  {
    description:
      "Agar dapat menempati tingkat yang sejajar dengan Pasar Modal di negara lainnya, maka Pasar Modal Indonesia masih harus mengejar ketinggalan dari negara-negara lain yang telah lebih maju."
  },
  {
    description:
      "Sehubungan dengan itu, maka Lembaga Sertifikasi Profesi Pasar Modal Indonesia yang diberi tugas untuk turut serta mempersiapkan dan menyeleksi tenaga-tenaga profesional dalam menunjang perkembangan Pasar Modal di Indonesia, akan selalu mengabdikan waktu, tenaga dan pengalaman maupun pengetahuan serta ketrampilan setiap individunya dengan sebaik-baiknya dalam upaya untuk dapat selalu mengikuti perkembangan yang terjadi di bidang Pasar Modal."
  },
  {
    description:
      "Semoga Tuhan Yang Maha Kuasa selalu memberikan Rahmat dan Hidayah-Nya kepada kita semua."
  }
]
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"
import SectionThirten from "~/components/layout/section/section-13"
import SectionFourteen from "~/components/layout/section/section-14"
import SectionFour from "~/components/layout/section/section-04"

export default {
  components: {
    LayoutPublic,
    SectionThirten,
    SectionFourteen,
    SectionFour
  },
  data() {
    return {
      datasPenutup: penutup
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
.aamiin {
  margin-bottom: 70px;
}
</style>
