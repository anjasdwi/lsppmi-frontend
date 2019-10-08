<template>
  <div class="background_white">
    <BodyDefault>
      <div class="form_register">
        <nuxt-link class="login_logo" to="/">
          <img alt="Logo" :src="logo" />
        </nuxt-link>
        <a-form :form="form" class="form_card" @submit="onSubmit">
          <h2 class="text_orange" style="margin-bottom:0;">
            Daftarkan
            <nuxt-link class="action_login action_login_header" to="/login">
              Masuk
            </nuxt-link>
          </h2>
          <h6 class="text_primary" style="margin-bottom:20px;">
            akun anda di sini:
          </h6>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: 'Silakan masukkan nama anda' }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Nama Anda"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'handphone',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Silakan masukkan nomor handphone anda'
                    },
                    { validator: onValidateHandphone }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Nomor Handphone"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'Email yang anda masukkan tidak valid'
                    },
                    { required: true, message: 'Silakan masukkan email anda' }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Email Anda"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Silakan masukkan password anda'
                    },
                    { validator: onValidatePassword }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Password Anda"
              type="password"
            />
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
                'repeat_password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Silakan masukkan password anda'
                    },
                    { validator: onComparePassword }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Konfirmasi Password"
              type="password"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button
              class="btn_block btn_orange"
              type="primary"
              style="margin-bottom:0;"
              html-type="submit"
            >
              Daftar
              <beat-loader :loading="isSubmit" color="#fff" size="8px" />
            </a-button>
          </a-form-item>
          <p class="text_middle"><span>atau daftar dengan</span></p>
          <div class="btn_auth_google">
            <img :src="iconGoogle" alt="google-sign" />
            <button type="button">Google</button>
          </div>
          <div class="btn_auth_facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <button style="margin-bottom:0;" type="button">Facebook</button>
          </div>
        </a-form>
      </div>
    </BodyDefault>
  </div>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue"
// #NOTE: Import Layout
import BodyDefault from "~/components/layout/body/default"
// #NOTE: Import Repository
import { RepositoryFactory } from "./../repositories/RepositoryFactory"
const AccountRepository = RepositoryFactory.get("account")

export default {
  middleware: "public",
  components: { BeatLoader, BodyDefault },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      iconGoogle: `${process.env.storage}/logo/google-sign.png`,
      iconFacebook: `${process.env.storage}/logo/facebook.png`,
      isSubmit: false,
      logo: `${process.env.storage}/logo.png`
    }
  },
  methods: {
    async createMember(payload) {
      // #NOTE: Post Data Create Member
      const response = await AccountRepository.createAccount(payload)
      const { code } = response.data
      this.isSubmit = false

      // #NOTE: IF Create Member Success
      if (code === 200) {
        this.$router.push({ name: "login" })
      } else {
        this.$notification.open({
          description:
            "Pendaftaran gagal, silakan untuk mencoba beberapa saat lagi.",
          message: "Pendaftaran Gagal"
        })
      }
    },
    onSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (!this.isSubmit) {
            this.isSubmit = true
            this.createMember(values)
          }
        }
      })
    },
    onComparePassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue("password")) {
        callback("Konfirmasi password tidak sama")
      } else {
        callback()
      }
    },
    onValidateHandphone(rule, value, callback) {
      if (value) {
        const reg = /^\d+$/
        if (!reg.test(value)) {
          callback("Format tidak valid")
        }
        if (value.length > 30) {
          callback("Nomor ponsel tidak boleh melebihi 30 karakter")
        } else {
          callback()
        }
      } else {
        callback()
      }
    },
    onValidatePassword(rule, value, callback) {
      if (value && value.length < 6) {
        callback("Minimal password 6 karakter")
      } else {
        callback()
      }
    }
  },
  head() {
    return {
      title: "Pendaftaran LSPPMI",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Pendaftaran LSPPMI"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Pendaftaran twitter:card"
        }
      ]
    }
  }
}
</script>
