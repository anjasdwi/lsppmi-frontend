export default function(context) {
  if (context.app.context.app.$cookies.get("lsppmi--token")) {
    return context.redirect("/member/profile")
  }
}
