<template>
  <div>
    <footer id="Footer" class="clearfix">
      <div class="footer__wrapper" style="padding: 50px 0px 20px 0px;">
        <div class="footer__wrapper__container">
          <div
            class="footer__wrapper__container__column--address section__footer"
          >
            <aside>
              <div class="footer_logo">
                <img
                  :src="logo"
                  :data-retina="logo"
                  data-height="40"
                  alt="company2"
                />
              </div>
              <ul class="footer_link">
                <li>
                  Sentra Radio Dalam,<br />
                  Jl. Antena I No.3, Gandaria Utara<br />
                  Kebayoran Baru, Jakarta Selatan 12140<br />
                </li>
              </ul>
            </aside>
          </div>
          <div
            class="footer__wrapper__container__column--sertificate section__footer"
          >
            <aside>
              <h4>Ujian Sertifikasi Kompetensi</h4>
              <ul class="footer_link">
                <li v-for="data in links" v-bind:key="data.title">
                  <i class="icon-right-open" />
                  <nuxt-link :to="data.link">{{ data.title }}</nuxt-link>
                </li>
              </ul>
              <!-- <ul>

              </ul> -->
            </aside>
          </div>
          <div
            class="footer__wrapper__container__column__contact section__footer"
          >
            <aside>
              <h4>Contact Us</h4>
              <ul class="footer_link">
                <li>
                  <i class="icon-right-open" />
                  <a href="#">(021) 7279-2569 / 2804 / 4185</a>
                </li>
                <li>
                  <i class="icon-right-open" />
                  <a href="#"> info@lsppmi.com</a>
                </li>
              </ul>
              <p class="footer_txt">
                Silakan tulis email anda untuk mendapatkan informasi terbaru
                mengenai kegiatan LSPPMI.
              </p>
              <input type="text" placeholder="Masukkan email anda ..." />
              <input type="submit" />
            </aside>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterDefault",
  data() {
    return {
      logo: `${process.env.storage}/logo.png`,
      links: [
        {
          title: "Perantara Pedagang Efek Pemasaran Terbatas",
          link:
            "/ujian-sertifikasi-kompetensi/prerantara-pedagang-efek-pemasaran-terbatas"
        },
        {
          title: "Penjual Efek Reksa Dana",
          link: "/ujian-sertifikasi-kompetensi/penjual-efek-reksa-dana"
        },
        {
          title: "Perantara Pedagang Efek Pemasaran",
          link: "/ujian-sertifikasi-kompetensi/perantara-pedagang-efek-pemasaran"
        },
        {
          title: "Perantara Pedagang Efek",
          link: "/ujian-sertifikasi-kompetensi/perantara-pedagang-efek"
        },
        {
          title: "Penjamin Emisi Efek",
          link: "/ujian-sertifikasi-kompetensi/penjamin-emisi-efek"
        },
        {
          title: "Manajer Investasi",
          link: "/ujian-sertifikasi-kompetensi/manajer-investasi"
        }
      ]
    }
  }
}
</script>
