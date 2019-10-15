<template>
  <div class="section mcb-section product-and-service">
    <div class="section_wrapper mcb-section-inner">
      <div class="wrap mcb-wrap one valign-top clearfix">
        <div class="mcb-wrap-inner">
          <div class="column mcb-column one-fourth column_placeholder">
            <div class="placeholder">
              &nbsp;
            </div>
          </div>
          <div class="column mcb-column one-second column_column">
            <div class="column_attr clearfix align_center">
              <h2>Ujian Sertifikasi Kompetensi</h2>
              <!-- <p>
                Nam vel justo cursus, faucibus lorem eget, egestas eros.
                Maecenas eleifend erat at justo fringilla imperdiet imperdiet
              </p> -->
            </div>
          </div>
          <div class="column mcb-column one column_divider">
            <hr class="no_line" />
          </div>
          <div
            v-for="(product, i) in products"
            :key="i"
            class="column mcb-column one-fourth column_column"
          >
            <div class="column_attr clearfix align_center item-product">
              <div
                class="image_frame image_item no_link scale-with-grid alignnone no_border"
              >
                <div class="image_wrapper">
                  <img class="scale-with-grid" :src="product.image" />
                </div>
              </div>
              <hr class="no_line item-line" style="margin:0 auto 30px" />
              <h5>{{ product.name }}</h5>
              <p>{{ product.description }}</p>
              <hr class="no_line" style="margin:0 auto 5px" />
              <div
                class="image_frame image_item scale-with-grid no_border hover-disable"
              >
                <div class="image_wrapper">
                  <a href="#">
                    <div style="color:#333;height:20px;padding-top:10px;">
                      <u>Selengkapnya</u>
                    </div>
                  </a>
                  <div class="image_links">
                    <a href="#" class="link">
                      <i class="icon-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column mcb-column one column_divider">
            <hr class="no_line" style="margin:0 auto 40px" />
          </div>
          <div class="column mcb-column one-third column_placeholder">
            <div class="placeholder">
              &nbsp;
            </div>
          </div>
          <div class="column mcb-column one-third column_button">
            <a
              class="button button_full_width button_size_2 button_theme button_js"
              href="#"
            >
              <span class="button_label">Lihat Semua</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeJadwalPelatihan",
  data() {
    return {
      iconCertification: `${process.env.storage}/icons/certification.png`,
      iconNext: `${process.env.storage}/icons/right_arrow.png`,
      products: [
        {
          description: "Wakil Perantara Pedagang Efek",
          image:
            "https://storage.googleapis.com/lsppmi/assets/frontend/product/WPPE.png",
          name: "WPPE"
        },
        {
          description: "Wakil Manajer Investasi",
          image:
            "https://storage.googleapis.com/lsppmi/assets/frontend/product/WMI.png",
          name: "WMI"
        },
        {
          description: "Wakil Perantara Pedagang Efek Pemasaran",
          image:
            "https://storage.googleapis.com/lsppmi/assets/frontend/product/WPPEP.png",
          name: "WPPEP"
        },
        {
          description: "Wakil Penjamin Emisi Efek",
          image:
            "https://storage.googleapis.com/lsppmi/assets/frontend/product/WPEE.png",
          name: "WPEE"
        }
      ]
    }
  }
}
</script>

<style>
.product-and-service {
  padding-top: 85px;
  padding-bottom: 65px;
}
.item-product {
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.05);
  margin: 0 2%;
  padding: 30px 40px;
}
.item-product p {
  height: 70px;
}
@media (max-width: 425px) {
  .item-product {
    margin-bottom: 30px;
  }
  .item-line {
    margin-bottom: 0px;
  }
  .item-product p {
    height: auto;
  }
}
</style>
