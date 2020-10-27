<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box"
         :class="{'content-collapse':collapse}">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import vHeader from './Header';
import vSidebar from './Sidebar.vue';
import bus from './bus.js'
export default {
  name: "home",
  data () {
    return {
      collapse: false
    }
  },
  components: {
    vHeader,
    vSidebar
  },
  created () {
    console.log(this.$router)
    // this.$router.push('/');
    bus.$on('collapse', msg => {
      console.log(this.collapse)

      this.collapse = msg
    })
  },
}
</script>

<style lang="scss" scoped>
</style>