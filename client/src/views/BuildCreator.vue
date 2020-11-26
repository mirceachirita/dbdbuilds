<template>
  <div class="builder-page page-content">
    <div class="builder-optional-items">
      <div class="builder-items-addons">
        Item + Add-ons
      </div>
      <div class="builder-offering">
        Offering
      </div>
    </div>

    <div class="builder-perks builder-inventory-perks">
      <div class="inventory-row">
        <LoadoutPerk v-for="(slot, index) in 4" :key="'loadout-slot-' + index"
        :slotIndex="index" @selectedLoadoutPerk="handleSelectedLoadoutPerk($event)"
        :isActive="loadoutSelectedSlotId == 'loadout-slot-' + index"
        />
      </div>
    </div>

    <div class="builder-inventory-perks">
      <div class="inventory-row">
        <InventoryPerk v-for="(perk, index) in perks"
          :key="perk._id" :perkData="perk" :perkIndex="index"
          @selectedInventoryPerk="handleSelectedInventoryPerk($event)"
          :isActive="inventorySelectedPerkId == 'inventory-perk-' + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InventoryPerk from '@/components/InventoryPerk.vue';
import LoadoutPerk from '@/components/LoadoutPerk.vue';
import axios from 'axios';

export default {
  components: {
    InventoryPerk,
    LoadoutPerk,
  },
  data() {
    return {
      inventorySelectedPerk: null,
      inventorySelectedPerkId: null,
      loadoutSelectedSlotId: null,
      loading: true,
      perks: null,
      errored: false,
    };
  },
  methods: {
    handleSelectedInventoryPerk(data) {
      this.inventorySelectedPerk = data.perkDatabaseId;
      this.inventorySelectedPerkId = data.perkSelectorId;
    },
    handleSelectedLoadoutPerk(id) {
      this.loadoutSelectedSlotId = id;
    },
  },
  computed: {
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

<style lang="scss" scoped>
    @import "../assets/scss/builder";
</style>
