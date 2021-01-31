<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/login/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
</style>
