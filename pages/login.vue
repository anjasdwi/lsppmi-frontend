<template>
  <div class="background_white">
    <BodyDefault>
      <div class="form_login">
        <nuxt-link class="login_logo" to="/">
          <img alt="Logo" :src="logo" />
        </nuxt-link>
        <a-form :form="form" class="form_card" @submit="handleSubmit">
          <h2 class="text_orange" style="margin-bottom:0;">
            Masuk
            <nuxt-link
              class="action_login action_login_header"
              to="/pendaftaran"
            >
              Daftar
            </nuxt-link>
          </h2>
          <h6 class="text_primary" style="margin-bottom:20px;">
            ke akun anda di sini:
          </h6>
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
                    }
                  ]
                }
              ]"
              class="input_login"
              placeholder="Password Anda"
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
              Masuk
            </a-button>
          </a-form-item>
          <p class="text_middle"><span>lupa password?</span></p>
          <div class="btn_resetpassword">
            <nuxt-link
              class="action_login"
              to="/reset-password"
              style="margin-top:0;"
            >
              Reset Password
            </nuxt-link>
          </div>
        </a-form>
      </div>
    </BodyDefault>
  </div>
</template>

<script>
// #NOTE: Import Layout
import BodyDefault from "~/components/layout/body/default"
export default {
  components: { BodyDefault },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      iconGoogle: `${process.env.storage}/logo/google-sign.png`,
      iconFacebook: `${process.env.storage}/logo/facebook.png`,
      logo: `${process.env.storage}/logo.png`
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values)
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      })
    }
  },
  head() {
    return {
      title: "Masuk | LSPPMI",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Masuk | LSPPMI"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Masuk | twitter:card"
        }
      ]
    }
  }
}
</script>
