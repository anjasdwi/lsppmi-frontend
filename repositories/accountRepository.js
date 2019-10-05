import Repository from "./Repository"

const resource = "/member"

export default {
  createAccount(payload) {
    return Repository.post(`${resource}/register`, payload)
  }
}
