<template>
  <div class="perk-item" v-if="perkData">
    <!-- <img class="perk-icon" :src="perkData.icon" /> -->
    <button
      type="button" class="perk-button"
      @mouseover="toggleDetailsOn"
      @mouseleave="toggleDetailsOff"
    >
      <img class="perk-icon" :src="perkData.icon" />
    </button>
    <div v-show="showDetails" class="perk-details">
      <p>{{perkData.title}}</p>
      <div v-html="perkData.description"></div>
      <p>{{perkData.category}}</p>
      <p>{{perkData.character.name}}</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Perk',
  props: ['perkData'],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetailsOn() {
      this.showDetails = true;
    },
    toggleDetailsOff() {
      this.showDetails = false;
    },
  },
};
</script>
