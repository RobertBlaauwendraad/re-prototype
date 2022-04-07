<template>
  <label class="volunteer-label" :for="availability.id">
    <input type="radio" name="availableVolunteer" :value="availability.id" :id="availability.id"
           @change="beneficiaryStore.setChosenAvailabilityId(availability.id)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: beneficiaryStore.getChosenAvailabilityId === availability.id}">
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold">{{ this.date }}</h5>
        </div>
        <p class="mb-1">
          {{ this.partOfDay }}
        </p>
      </div>
    </div>
  </label>
</template>

<script>

import {useBeneficiaryStore} from "@/stores/beneficiary";

export default {
  name: "RadioAvailability",
  props: {
    availability: {
      required: true
    }
  },
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  data: () => ({
    date: '',
    partOfDay: ''
  }),
  mounted() {
    const dateTimeFrom = new Date(this.availability.datetimeFrom);
    const dateTimeTo = new Date(this.availability.datetimeTo);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    this.date = dateTimeFrom.toLocaleDateString("en", dateOptions);

    const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit' }
    this.partOfDay = dateTimeFrom.toLocaleTimeString("nl", timeOptions) + " - " + dateTimeTo.toLocaleTimeString("nl", timeOptions)
  }
}
</script>

<style scoped>

</style>