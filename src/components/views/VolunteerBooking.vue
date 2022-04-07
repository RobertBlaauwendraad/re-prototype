<template>
  <div class="container d-flex flex-column volunteer-container py-4">
    <div class="row-cols-auto" v-if="beneficiaryStore.getActivities.length === 0">
      <h3 class="col">Please first select the activity you need help with</h3>
      <router-link to="ask-for-help">
        <button class="btn btn-primary">Take me there</button>
      </router-link>
    </div>

    <template v-else>
      <VolunteerList
        v-if="tabIndex === 0"
      />
      <VolunteerAvailability
        v-if="tabIndex === 1"
      />

      <div class="row my-4">
        <div class="col d-flex justify-content-between">
          <button
            class="btn btn-danger"
            :class="{invisible: tabIndex === 0}"
            v-on:click="prevTab"
          >
            <font-awesome-icon icon="arrow-left" />
            Back
          </button>
          <button
            class="btn "
            :class="beneficiaryStore.getChosenVolunteerId ? 'btn-success' : 'btn-outline-success disabled'"
            v-on:click="nextTab"
            v-if="tabIndex !== finalTab"
          >
            Next
            <font-awesome-icon icon="arrow-right" />
          </button>
          <button
            class="btn "
            :class="beneficiaryStore.getChosenAvailabilityId ? 'btn-success' : 'btn-outline-success disabled'"
            v-on:click="nextTab"
            v-if="tabIndex === finalTab"
          >
            Confirm
            <font-awesome-icon icon="check" />
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VolunteerList from "@/components/VolunteerList";
import VolunteerAvailability from "@/components/VolunteerAvailability";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  name: "VolunteerBooking",
  components: {VolunteerList, VolunteerAvailability},
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  data: () => ({
    tabIndex: 0,
    finalTab: 1,
  }),
  created () {
    this.beneficiaryStore.fetchActivities();
  },
  methods: {
    prevTab () {
      this.tabIndex = 0;
    },
    nextTab () {
      if (this.tabIndex === 1) {
        this.confirmedSelection()
      }
      this.tabIndex = 1;
    },
    confirmedSelection () {
    }
  }
}
</script>

<style scoped>

</style>