<template>
  <label class="volunteer-label" :for="activity.id">
    <input
      type="checkbox"
      name="availableVolunteer"
      :value="modelValue"
      :id="activity.id"
      @input="updateStore"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: isActive}">
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold">{{ capitalize(activity.name) }}</h5>
        </div>
        <p class="mb-1">
          {{ activity.description }}
        </p>
      </div>
    </div>
  </label>
</template>

<script>
import {capitalize} from "vue";
import {useBeneficiaryStore} from "@/stores/beneficiary";

export default {
  name: "CheckboxActivity",
  setup() {
    const beneficiaryStore = useBeneficiaryStore()

    return {
      beneficiaryStore
    }
  },
  props: {
    modelValue: {
      required: true
    },
    activity: {
      required: true
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    isActive: false
  }),
  methods: {
    capitalize (string) {
      return capitalize(string);
    },
    async updateStore () {
      if (this.isActive) {
        await this.beneficiaryStore.deleteActivity(this.activity.id)
      } else {
        await this.beneficiaryStore.insertActivity(this.activity.id)
      }
      await this.updateIsActive()
    },
    async updateIsActive () {
      await this.beneficiaryStore.fetchActivities();
      this.isActive = false;
      for (const beneficialActivity of this.beneficiaryStore.getActivities) {
        if (beneficialActivity.id === this.activity.id) {
          this.isActive = true;
        }
      }
    }
  },
  mounted() {
    this.updateIsActive();
  }
}
</script>

<style scoped>

</style>