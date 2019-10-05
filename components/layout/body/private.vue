<template>
  <div class="body_private">
    <a-row class="body_private_active">
      <a-col :xs="0" :md="8" :lg="7" class="box_private_left">
        <div>
          <div class="box_private_header">
            <h3>Imbar Winata</h3>
          </div>
          <ol class="box_private_menu">
            <li>
              <nuxt-link to="/member/profile">
                <span>
                  <font-awesome-icon :icon="['fas', 'user-circle']" />
                </span>
                Profil
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/member/jadwal-ujian">
                <span>
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" />
                </span>
                Jadwal Ujian
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/member/ganti-email">
                <span>
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
                Ganti Email
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/member/ganti-password">
                <span>
                  <font-awesome-icon :icon="['fas', 'unlock-alt']" />
                </span>
                Ganti Password
              </nuxt-link>
            </li>
          </ol>
          <ol class="box_private_menu box_private_menu-last">
            <li>
              <nuxt-link to="/member/keluar">
                <span>
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                </span>
                Keluar
              </nuxt-link>
            </li>
          </ol>
        </div>
      </a-col>
      <a-col :xs="24" :md="16" :lg="17" class="box_private_right">
        <div>
          <slot />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "BodyPrivate",
  data() {
    return {}
  }
}
</script>

<style>
.body_private {
  background: #f5f6fa;
  padding-top: 120px;
}
.body_private_active {
  margin: 0 auto;
  max-width: 1145px;
  padding: 25px 10px;
  padding-right: 0;
}
.box_private_left {
  padding-right: 30px;
}
.box_private_left > div,
.box_private_right > div {
  background: #fff;
  border-radius: 5px;
  padding: 16px;
}
.box_private_header {
  border-bottom: 1px dashed #f5f6fa;
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.box_private_header > h3 {
  color: #35405a;
}
.box_private_menu {
  border-bottom: 1px dashed #f5f6fa;
  padding: 10px !important;
}
.box_private_menu > li > a {
  color: #58627a !important;
}
.box_private_menu > li > a > span {
  display: inline-block;
  width: 30px;
}
.box_private_menu > li > a > span > svg {
  font-size: 20px;
}
.box_private_menu > li:not(:last-child) {
  margin-bottom: 10px;
}
.box_private_menu-last {
  border: none;
  padding-bottom: 0 !important;
}
@media (max-width: 1024px) {
  .body_private_active {
    padding-left: 70px;
    padding-right: 65px;
  }
}
@media (max-width: 768px) {
  .body_private_active {
    padding-left: 55px;
    padding-right: 50px;
  }
  .box_private_left {
    padding-right: 20px;
  }
}
@media (max-width: 425px) {
  .body_private {
    padding-top: 0px;
  }
  .body_private_active {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
