<template>
  <div :class="['inventory-perk', (isActive ? 'inventory-perk-active' : '')]">
    <button type="button" class="inventory-perk-btn"
      :id="'inventory-perk-' + perkIndex"
      @click="handleClick($event)"
    >
      <img class="inventory-perk-img" :src="perkData.icon" />
      <img class="inventory-empty-perk-img" src="https://raw.githubusercontent.com/mirceachirita/dbdbuilds/master/static/perks/empty.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'InventoryPerk',
  props: ['perkData', 'perkIndex', 'isActive'],
  data() {
    return {
      perkSelectorId: null,
    };
  },
  methods: {
    handleClick(event) {
      this.perkSelectorId = event.currentTarget.getAttribute('id');
      this.$emit('selectedInventoryPerk', {
        perkDatabaseId: this.perkData._id,
        perkSelectorId: this.perkSelectorId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/builder";
</style>
