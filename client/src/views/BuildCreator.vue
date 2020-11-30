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
        <LoadoutPerk v-for="(slot, index) in this.builderSelectedPerks"
        :key="'loadoutSlot_' + index"
        :slotIndex="index" @selectedLoadoutPerk="handleSelectedLoadoutPerk($event)"
        :isActive="loadoutSelectedSlotId == index"
        :perkData="slot"
        />
      </div>
    </div>

    <div class="builder-inventory-perks">
      <div class="inventory-row">
        <Loader v-if="loading" />
        <InventoryPerk v-else v-for="(perk, index) in perks"
          :key="perk._id" :perkData="perk" :perkIndex="index"
          @selectedInventoryPerk="handleSelectedInventoryPerk($event)"
          :isActive="inventorySelectedPerkId == 'inventory-perk-' + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import InventoryPerk from '@/components/InventoryPerk.vue';
import LoadoutPerk from '@/components/LoadoutPerk.vue';
import axios from 'axios';

export default {
  components: {
    InventoryPerk,
    LoadoutPerk,
    Loader,
  },
  data() {
    return {
      inventorySelectedPerk: null,
      inventorySelectedPerkId: null,
      loadoutSelectedSlotId: null,
      loading: true,
      perks: [],
      errored: false,
      builderSelectedPerks: {
        loadoutSlot_0: {},
        loadoutSlot_1: {},
        loadoutSlot_2: {},
        loadoutSlot_3: {},
      },
    };
  },
  methods: {
    handleSelectedInventoryPerk(data) {
      this.inventorySelectedPerk = data.perkDatabaseId;
      this.inventorySelectedPerkId = data.perkSelectorId;
      this.updateBuilderLoadout();
    },
    handleSelectedLoadoutPerk(id) {
      this.loadoutSelectedSlotId = id;
    },
    findPerk(id) {
      return this.perks.find((perk) => perk._id === id);
    },
    updateBuilderLoadout() {
      const perkId = this.inventorySelectedPerk;
      const slotId = this.loadoutSelectedSlotId;

      if (!perkId || !slotId) { return; }
      const slotToEmpty = this.checkAndReturnPerkAlreadyInSlot(perkId);

      if (typeof slotToEmpty !== 'undefined') {
        this.removePerkFromLoadout(slotToEmpty);
      } else {
        this.addPerkInLoadout(slotId, perkId);
      }
    },
    checkAndReturnPerkAlreadyInSlot(perkId) {
      const obj = this.builderSelectedPerks;
      const perkInSlot = Object.keys(obj).find((section) => obj[section]._id === perkId);
      return perkInSlot;
    },
    removePerkFromLoadout(slotId) {
      this.$set(this.builderSelectedPerks, slotId, '');
    },
    addPerkInLoadout(slotId, perkId) {
      this.$set(this.builderSelectedPerks, slotId, this.findPerk(perkId));
    },
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
