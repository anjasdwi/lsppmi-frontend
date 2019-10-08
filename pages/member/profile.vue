<template>
  <TemplatePrivate>
    <h3 class="text_private">Profil Akun Anda</h3>
    <a-row>
      <a-col :xs="24" :md="24" :lg="11" class="box_shadow">
        <div>
          <span class="title-content">Nama</span>
          <div class="email-mobileNumber">{{ profile && profile.name }}</div>
        </div>
        <div>
          <span class="title-content">Email</span>
          <div class="email-mobileNumber">{{ profile && profile.email }}</div>
        </div>
        <div>
          <span class="title-content">Nomor Ponsel</span>
          <div class="email-mobileNumber">
            {{ profile && profile.handphone }}
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :md="24" :lg="13">
        <a-form :form="form" class="form_standar_active" @submit="onSubmit">
          <a-form-item
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
            label=""
          >
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Silakan masukkan nama anda'
                    }
                  ]
                }
              ]"
              class="input_standar"
              placeholder="Nama Anda"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'city',
                {
                  rules: [
                    { required: true, message: 'Silakan masukkan kota anda' }
                  ]
                }
              ]"
              class="input_standar"
              placeholder="Kota Anda"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'address',
                {
                  rules: [
                    { required: true, message: 'Silakan masukkan alamat anda' }
                  ]
                }
              ]"
              class="input_standar"
              placeholder="Alamat Anda"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'zip_code',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Silakan masukkan kode pos anda'
                    }
                  ]
                }
              ]"
              class="input_standar"
              placeholder="Kode Pos Anda"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button
              class="btn_block btn_orange"
              type="primary"
              style="margin-bottom:0;"
              html-type="submit"
            >
              Simpan
              <beat-loader :loading="isSubmit" color="#fff" size="8px" />
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </TemplatePrivate>
</template>

<script>
// #NOTE: Import Layout
import TemplatePrivate from "~/components/layout/private"
// #NOTE: Import Repositories
import { RepositoryFactory } from "../../repositories/RepositoryFactory"
const AccountRepository = RepositoryFactory.get("account")

export default {
  middleware: "authenticated",
  components: { TemplatePrivate },
  data() {
    return {
      form: this.$form.createForm(this),
      isLoading: false,
      isSubmit: false,
      profile: {}
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      this.isLoading = true
      const token = this.$cookies.get("lsppmi--token")
      const { data } = await AccountRepository.getMember({ token })
      if (data.code === 200) {
        this.profile = data.data
        this.isLoading = false
      } else {
        this.isLoading = false
      }
    },
    onSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.isSubmit = true
          console.log("values:", { values })
        }
      })
    }
  },
  head() {
    return {
      title: "Dashboard Member LSPPM",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dashboard Member LSPPM"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Dashboard Member twitter:card"
        }
      ]
    }
  }
}
</script>

<style>
.box_shadow {
  background-color: #f5f6fa;
  padding: 24px;
}
.title-content {
  font-size: 14px;
  color: #58627a;
  padding-bottom: 8px;
}
.email-mobileNumber {
  font-size: 16px;
  color: #35405a;
  padding-bottom: 2px;
}
.form_standar_active {
  padding-left: 30px;
}
@media (max-width: 768px) {
  .form_standar_active {
    padding-left: 0;
    padding-top: 30px;
  }
}
@media (max-width: 375px) {
  .box_private_right > div {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
