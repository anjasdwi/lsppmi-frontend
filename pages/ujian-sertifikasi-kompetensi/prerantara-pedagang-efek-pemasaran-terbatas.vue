<template>
  <LayoutPublic>
    <SectionFive
      classProps="header-manajerinvestasi header-ujiansertifikasi"
      title="Perantara Pedagang Efek Pemasaran Terbatas"
    />
    <!-- <SectionEight
      image="http://be.beantownthemes.com/html/content/company2/images/home_company2_about1.jpg"
      mode="left"
    >
      <h3>Curabitur sed iaculis dolor, non congue ligula</h3>
      <p>
        Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue
        porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque
        eros ut, pellentesque nibh. Nam lacinia suscipit accumsan. Donec
        sodales, neque vitae.
      </p>
      <p>
        Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante
        eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper
        feugiat sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque
        nibh. Nam lacinia suscipit accumsan.
      </p>
    </SectionEight>
    <SectionNine
      :peoples="peoples"
      description="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere."
      title="People"
    /> -->
  </LayoutPublic>
</template>

<script>
// #NOTE: Import Layout
import LayoutPublic from "~/components/layout/public"

import SectionFive from "~/components/layout/section/section-05"
// import SectionEight from "~/components/layout/section/section-08"
// import SectionNine from "~/components/layout/section/section-09"

export default {
  components: {
    LayoutPublic,
    SectionFive
    // SectionEight
    // SectionNine
  },
  data() {
    return {
      peoples: [
        {
          name: "John Doe",
          occupation: "Fusce ut velit",
          image:
            "http://be.beantownthemes.com/html/content/company2/images/home_company2_about2.jpg"
        },
        {
          name: "Patricia Ipsa",
          occupation: "Vivamus in diam",
          image:
            "http://be.beantownthemes.com/html/content/company2/images/home_company2_about3.jpg"
        },
        {
          name: "Jessica Parker",
          occupation: "Ut ultricies",
          image:
            "http://be.beantownthemes.com/html/content/company2/images/home_company2_about4.jpg"
        }
      ]
    }
  },
  head() {
    return {
      title:
        "LSPPMI | Ujian Sertifikasi Kompetensi - Perantara Pedagang Efek Pemasaran Terbatas",
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
.header-ujiansertifikasi {
  margin-top: 30px;
}
.header-ujiansertifikasi::before {
  content: "Ujian Sertifikasi";
}
</style>
