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
              <h4>Sertifikasi</h4>
              <ul class="footer_link">
                <li>
                  <i class="icon-right-open" /><a href="#">Analisis Efek</a>
                </li>
                <li>
                  <i class="icon-right-open" /><a href="#">Analisis Teknikal</a>
                </li>
                <li>
                  <i class="icon-right-open" /><a href="#">Equity Sales</a>
                </li>
                <li>
                  <i class="icon-right-open" />
                  <a href="#" style="margin-left:-5px;">Investment Banking</a>
                </li>
                <li>
                  <i class="icon-right-open" /><a href="#">Analisis Efek</a>
                </li>
                <li>
                  <i class="icon-right-open" /><a href="#">Analisis Teknikal</a>
                </li>
                <li>
                  <i class="icon-right-open" /><a href="#">Equity Sales</a>
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
                  <a href="#">021-57903476 / 021-57903477</a>
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
              <input type="text" /><input type="submit" />
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
      logo: `${process.env.storage}/logo.png`
    }
  }
}
</script>
