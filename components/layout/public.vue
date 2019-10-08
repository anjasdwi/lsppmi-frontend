<template>
  <div>
    <div id="Wrapper">
      <HeaderDefault />
      <div id="Content">
        <div class="content_wrapper clearfix">
          <div class="sections_group">
            <BodyPublic>
              <slot />
            </BodyPublic>
          </div>
        </div>
      </div>
    </div>
    <FooterDefault />
    <HeaderDefaultMobile />
    <div id="body_overlay" />
  </div>
</template>

<script>
import BodyPublic from "~/components/layout/body/public"
import FooterDefault from "~/components/layout/footer/default"
import HeaderDefault from "~/components/layout/header/default"
import HeaderDefaultMobile from "~/components/layout/header/mobile"

export default {
  name: "LayoutPublic",
  components: {
    BodyPublic,
    FooterDefault,
    HeaderDefault,
    HeaderDefaultMobile
  },
  data() {
    return {}
  }
}
</script>
