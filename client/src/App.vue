<template>
  <div id="app" class="app-wrapper">
    <Dashboard />
    <router-view></router-view>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/variables";
  @import "./assets/scss/style";
</style>
