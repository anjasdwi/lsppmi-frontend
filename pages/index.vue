<template>
  <div>
    <div id="Wrapper">
      <HeaderDefault />
      <div id="Content">
        <div class="content_wrapper clearfix">
          <div class="sections_group">
            <div class="entry-content">
              <carousel
                :autoplay="true"
                :centerMode="true"
                :mouse-drag="true"
                :navigationEnabled="true"
                :loop="true"
                :paginationEnabled="false"
                :per-page="1"
              >
                <slide v-for="(slider, index) in sliders" :key="index">
                  <a :href="slider.link">
                    <img :src="slider.file" :alt="index" style="width: 100%;" />
                  </a>
                </slide>
              </carousel>
              <HomeJadwalPelatihan />
              <BodyPublic class="body--home">
                <SectionTwo
                  btnName="Selengkapnya"
                  image="https://storage.googleapis.com/ticmi_asset/cdn/psp/frontend/assets/images/default/psp_ujian.jpg"
                  link="/tentang-kami/profile"
                  title="Profile LSPPMI"
                >
                  Lembaga Sertifikasi Profesi Pasar Modal Indonesai (LSPPMI)
                  adalah lembaga pelaksana kegiatan sertifikasi kompetensi kerja
                  di bidang Pasar Modal yang mendapat lisensi dari Badan
                  Nasional Sertifikasi Profesi (BNSP) dan didirikan oleh
                  asosiasi profesi dan asosiasi industri di bidang pasar modal.
                </SectionTwo>
              </BodyPublic>
              <!-- <div
                class="section mcb-section"
                style="padding-top:100px; padding-bottom:60px"
              >
                <div class="section_wrapper mcb-section-inner">
                  <div class="wrap mcb-wrap one valign-top clearfix">
                    <div class="mcb-wrap-inner">
                      <div
                        class="column mcb-column one-fourth column_placeholder"
                      >
                        <div class="placeholder">
                          &nbsp;
                        </div>
                      </div>
                      <div class="column mcb-column one-second column_column">
                        <div class="column_attr clearfix align_center">
                          <h2>Testimony</h2>
                          <p>
                            Curabitur sed iaculis dolor, non congue ligula.
                            Maecenas imperdiet ante eget hendrerit posuere.
                          </p>
                        </div>
                      </div>
                      <div class="column mcb-column one column_divider">
                        <hr class="no_line" style="margin:0 auto 20px" />
                      </div>
                      <div class="column mcb-column one-second column_column">
                        <div
                          class="column_attr clearfix"
                          style=" padding:50px 50px 35px; box-shadow: 0 0px 20px rgba(0,0,0,.05); border-radius: 10px; margin: 0 2%; border: 1px solid #f2f2f2"
                        >
                          <div
                            style="background: url(/images/home_company2_pic16.png) no-repeat left center; padding: 20px 0 20px 95px; margin-bottom: 20px"
                          >
                            <h6 style="margin-bottom:2px;color:#002350;">
                              Steven McClark
                            </h6>
                            <p style="color: #3e3e3e; margin: 0">
                              Lorem ipsum dolor
                            </p>
                          </div>
                          <p>
                            Nulla mauris dolor, gravida a varius blandit, auctor
                            eget purus. Phasellus scelerisque sapien sit amet
                            mauris lao reet, eget scelerisque nunc cursus. Duis
                            ultricies
                          </p>
                        </div>
                      </div>
                      <div class="column mcb-column one-second column_column">
                        <div
                          class="column_attr clearfix"
                          style=" padding:50px 50px 35px; box-shadow: 0 0px 20px rgba(0,0,0,.05); border-radius: 10px; margin: 0 2%; border: 1px solid #f2f2f2"
                        >
                          <div
                            style="background: url(/images/home_company2_pic17.png) no-repeat left center; padding: 20px 0 20px 95px; margin-bottom: 20px"
                          >
                            <h6 style="margin-bottom:2px;color:#002350;">
                              Jenny Principle
                            </h6>
                            <p style="color: #3e3e3e; margin: 0">
                              Duis ultricies
                            </p>
                          </div>
                          <p>
                            Nulla mauris dolor, gravida a varius blandit, auctor
                            eget purus. Phasellus scelerisque sapien sit amet
                            mauris lao reet, eget scelerisque nunc cursus. Duis
                            ultricies ultricies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <div
                class="section mcb-section section-border-bottom bg_gray_soft"
                style="padding-top:50px; padding-bottom:50px"
              >
                <h2
                  class="column_attr clearfix align_center"
                  style="margin-bottom: 50px;"
                >
                  Asosiasi Pendukung
                </h2>
                <div class="section_wrapper mcb-section-inner">
                  <div
                    class="wrap mcb-wrap one  column-margin-20px valign-top clearfix"
                  >
                    <div class="mcb-wrap-inner asociation">
                      <div
                        v-for="(association, index) in associations"
                        :key="index"
                        class="column mcb-column one-fifth column_image"
                      >
                        <div
                          class="image_frame image_item no_link scale-with-grid aligncenter no_border"
                        >
                          <div class="image_wrapper">
                            <a :href="association.link">
                              <img
                                class="scale-with-grid image_grayscale"
                                :src="association.file"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterDefault />
    <HeaderDefaultMobile />
    <div id="body_overlay" />
  </div>
</template>

<script>
// #NOTE: Import Layout
import BodyPublic from "~/components/layout/body/public"
import FooterDefault from "~/components/layout/footer/default"
import HeaderDefault from "~/components/layout/header/default"
import HeaderDefaultMobile from "~/components/layout/header/mobile"
import SectionTwo from "~/components/layout/section/section-02"
// #NOTE: Import Component Home
import HomeJadwalPelatihan from "~/components/home/jadwal-pelatihan"
export default {
  components: {
    BodyPublic,
    FooterDefault,
    HeaderDefault,
    HeaderDefaultMobile,
    HomeJadwalPelatihan,
    SectionTwo
  },
  data() {
    return {
      title: "LSPPMI Title",
      activeMenu: "",
      associations: [
        {
          file: `${process.env.storage}/asosiasi/asosiasi-01.png`,
          link: "#"
        },
        {
          file: `${process.env.storage}/asosiasi/asosiasi-02.png`,
          link: "#"
        },
        {
          file: `${process.env.storage}/asosiasi/asosiasi-03.png`,
          link: "#"
        },
        {
          file: `${process.env.storage}/asosiasi/asosiasi-04.png`,
          link: "#"
        }
      ],
      iconNext: `${process.env.storage}/icons/right_arrow.png`,
      sliders: [
        {
          file: `${process.env.storage}/sliders/slider-001.jpg`,
          link: "https://lsppmi.id/"
        },
        {
          file: `${process.env.storage}/sliders/slider-002.jpg`,
          link: "https://lsppmi.id/"
        },
        {
          file: `${process.env.storage}/sliders/slider-003.jpg`,
          link: "https://lsppmi.id/"
        }
      ]
    }
  },
  head() {
    return {
      title: "LSPPMI | Beranda",
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
.asociation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.entry-content {
  padding-top: 65px;
}
.body--home {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.body--home .sectiontwo {
  margin-top: 15px !important;
  padding-bottom: 10px !important;
}
@media (max-width: 767px) {
  .entry-content {
    padding-top: 0px;
  }
}
@media (max-width: 425px) {
  .entry-content {
    padding-top: 70px;
  }
}
</style>
