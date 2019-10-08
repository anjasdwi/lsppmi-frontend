export const state = () => ({
  token: null,
  profile: {}
})

export const mutations = {
  setProfile(state, payload) {
    state.profile = payload
  },
  setToken(state, payload) {
    state.token = payload
  }
}

export const getters = {
  getProfile(state) {
    return state.profile
  },
  getToken(state) {
    return state.token
  }
}
