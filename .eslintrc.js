module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // Pertimbangkan untuk menggunakan `plugin:vue/strongly-recommended` atau `plugin:vue/recommended` untuk memperketat aturan.
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  // diperlukan untuk melinting file *.vue
  plugins: [
    'vue'
  ],
  // tambahkan aturan anda disini
  rules: {
    "no-console": "off",
    "prettier/prettier": ["error", { "semi": false }],
    "semi": [2, "never"],
    // "vue/html-self-closing": "off",
    // "vue/max-attributes-per-line": "off",
    // "vue/singleline-html-element-content-newline": "off"
  }
}
