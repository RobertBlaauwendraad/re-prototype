<template>
  <div class="container d-flex flex-column volunteer-container py-4">
    <BeneficiaryActivity
      v-if="beneficiaryStore.getActivities.length === 0"
    />

    <template v-else>
      <VolunteerList
        @input="changedVolunteer"
        v-model="chosenVolunteer"
        v-if="tabIndex === 0"
      />
      <VolunteerAvailability
        @input="changedDaytime"
        v-model="chosenDaytime"
        :chosenVolunteer="chosenVolunteer"
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
            :class="chosenVolunteer ? 'btn-success' : 'btn-outline-success disabled'"
            v-on:click="nextTab"
            v-if="tabIndex !== finalTab"
          >
            Next
            <font-awesome-icon icon="arrow-right" />
          </button>
          <button
            class="btn "
            :class="chosenDaytime ? 'btn-success' : 'btn-outline-success disabled'"
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
import BeneficiaryActivity from "@/components/BeneficiaryActivity";
export default {
  name: "VolunteerBooking",
  components: {BeneficiaryActivity, VolunteerList, VolunteerAvailability},
  setup() {
    const beneficiaryStore = useBeneficiaryStore()

    return {
      beneficiaryStore
    }
  },
  data: () => ({
    tabIndex: 0,
    finalTab: 1,
    chosenVolunteer: '',
    chosenDaytime: ''
  }),
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
    },
    changedActivity (activity) {
      this.chosenActivity = activity
    },
    changedVolunteer (volunteer) {
      this.chosenVolunteer = volunteer
    },
    changedDaytime (daytime) {
      this.chosenDaytime = daytime
    }
  }
}
</script>

<style scoped>

</style>