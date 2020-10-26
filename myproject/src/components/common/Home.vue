<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './Header';
import vSidebar from './Sidebar.vue';
import bus from './bus.js'
export default {
  name: "home",
  components: {
    vHeader,
    vSidebar
  },
  created () {
    console.log(this.$router)
    this.$router.push('/');

  },
}
</script>

<style lang="scss" scoped>
</style>