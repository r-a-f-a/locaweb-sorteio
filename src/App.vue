<template>
  <div id="app" :style="appStyles">
    <router-view />
  </div>
</template>
<script>
/* eslint-disable no-console */
export default {
  name: "LOCAWEB-SORTEIO",
  data() {
    return {
      style: `./components/themes/${process.env.VUE_APP_THEME}/styles.css`
    };
  },
  computed: {
    appStyles() {
      return {
        "--style": this.style,
        $importStyle: this.style
      };
    }
  },
  created() {
    // document.querySelector(":root").style.setProperty("--style", this.style);
    console.log("THIS ENV", process.env.VUE_APP_THEME);
  }
};
</script>
<style lang="scss" scoped>
$base-style: "./components/themes/series/styles.css";
// $importStyle: var(--style);
// @import url(#{$base-style});
// @import url(#{$importStyle});
// @import "./components/themes/series/styles.css";
</style>
