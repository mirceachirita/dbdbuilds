<template>
  <div class="dashboard-wrapper">
    <ul class="dashboard-list">
      <li class="dashboard-item">
        <router-link to="/builds" tag="button">Builds</router-link>
      </li>
      <li class="dashboard-item">
        <router-link to="/perks" tag="button">Perks</router-link>
      </li>
      <li class="dashboard-item">
        <router-link to="/survivors" tag="button">Survivors</router-link>
      </li>
      <li class="dashboard-item">
        <router-link to="/killers" tag="button">Killers</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/scss/dashboard";
</style>
