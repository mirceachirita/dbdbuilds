<template>
  <div :class="['inventory-perk', (isActive ? 'loadout-slot-active' : '')]">
    <button type="button" class="inventory-perk-btn"
      :id="slotIndex"
      @click="handleClick($event)"
    >
      <img v-if="perkData" class="inventory-perk-img" :src="perkData.icon" />
      <img class="inventory-empty-perk-img" src="https://raw.githubusercontent.com/mirceachirita/dbdbuilds/master/static/perks/empty.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoadoutPerk',
  props: ['perkData', 'slotIndex', 'isActive'],
  data() {
    return {
      hasPerk: false,
      selectedLoadoutPerk: null,
    };
  },
  methods: {
    handleClick(event) {
      this.selectedLoadoutPerk = event.currentTarget.getAttribute('id');
      this.$emit('selectedLoadoutPerk', this.selectedLoadoutPerk);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/builder";
</style>
