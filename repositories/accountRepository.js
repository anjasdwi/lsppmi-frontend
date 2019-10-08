import Repository from "./Repository"

const resource = "/member"

export default {
  createAccount(payload) {
    return Repository().post(`${resource}/register`, payload)
  },
  getMember({ token }) {
    return Repository({ Authorization: `Bearer ${token}` }).get(`${resource}/`)
  },
  loginMember(payload) {
    return Repository().post(`${resource}/login`, payload)
  }
}
