<template>
  <div>
    <div id="Wrapper">
      <HeaderDefault />
      <div id="Content">
        <div class="content_wrapper clearfix">
          <div class="sections_group">
            <BodyPublic>
              <SectionFive classProps="header-location" title="Lokasi Kami">
                <a
                  class="contactus-maps"
                  href="https://goo.gl/maps/uFZMq12uW8uadRbb6"
                  target="_blank"
                >
                  <div>
                    <img alt="Maps" :src="map" />
                    <h5>LSPPMI</h5>
                    <p>
                      Sentra Radio Dalam, Jl. Antena I No.3, Gandaria Utara<br />
                      Kebayoran Baru, Jakarta Selatan 12140<br />
                    </p>
                  </div>
                </a>
              </SectionFive>
            </BodyPublic>
            <SectionSix
              banner="https://resizeimage.net/viewimg/SyQ74FpxENQAgzrL/49hym/278.jpg"
              subtitle="Kontak Kami"
              title="Hubungi Kami:"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </SectionSix>
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

import SectionFive from "~/components/layout/section/section-05"
import SectionSix from "~/components/layout/section/section-06"

export default {
  components: {
    BodyPublic,
    FooterDefault,
    HeaderDefault,
    HeaderDefaultMobile,
    SectionFive,
    SectionSix
  },
  data() {
    return {
      map: `${process.env.storage}/about/location.jpg`
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
.header-location {
  margin-top: 30px;
}
.header-location::before {
  content: "Lokasi Kami";
}
.contactus-maps,
.contactus-maps:hover,
.contactus-maps > div > h5,
.contactus-maps > div > p {
  color: rgba(49, 53, 59, 0.96);
  text-align: center;
  text-decoration: none;
  width: 100%;
}
.contactus-maps > div {
  margin: 0 auto !important;
  max-width: 600px !important;
}
.contactus-maps > div > img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  margin-top: 40px !important;
  transition: 0.3s;
}
.contactus-maps > div > h5 {
  display: block;
  font-size: 24px;
  margin-top: 20px;
}
.contactus-maps > div > img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transition: 0.3s;
}
@media (max-width: 425px) {
  .header-location {
    margin-top: 10px;
  }
  .contactus-maps > div > h5 {
    font-size: 16px;
  }
  .contactus-maps > div > p {
    font-size: 12px;
  }
}
</style>
