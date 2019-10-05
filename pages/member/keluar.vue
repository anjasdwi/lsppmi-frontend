<template>
  <div></div>
</template>

<script>
export default {
  name: "SignOut",
  data() {
    return {}
  },
  mounted() {
    window.$nuxt.$cookies.remove("lsppmi--token")
    this.$router.push("/login")
  },
  head() {
    return {
      title: "Keluar Dashboard",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Keluar Dashboard"
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
