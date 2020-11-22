<template>
  <div class="page-content">
    <Error v-if="errored" />
    <div v-else class="perks-wrapper">
      <Loader v-if="loading" />
      <div v-else class="perks-container">
        <Perk v-for="perk in perks" :key="perk._id" :perkData="perk"/>
      </div>
    </div>
  </div>
</template>

<script>
import Perk from '@/components/Perk.vue';
import Error from '@/components/Error.vue';
import Loader from '@/components/Loader.vue';
import axios from 'axios';

export default {
  components: {
    Perk,
    Error,
    Loader,
  },
  data() {
    return {
      loading: true,
      perks: null,
      errored: false,
    };
  },
  mounted() {
    axios.get('http://localhost:3000/perksTest')
      .then((response) => {
        this.perks = response.data;
      }).catch((error) => {
        this.errored = true;
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/scss/perks";
</style>
