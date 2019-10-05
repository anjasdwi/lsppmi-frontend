export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}
