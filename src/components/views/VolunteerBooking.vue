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
  <div class="modal fade" ref="modalVolunteerActivity" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalVolunteerActivity" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Select activity to get help with</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card overflow-auto">
            <div class="list-group list-group-flush">
              <template
                v-for="activity in volunteerActivities"
                :key="activity"
              >
                <label :for="activity.name">
                  <input type="radio" :name="activity" :value="activity.id" :id="activity.name"
                    @change="changedActivity(activity.id)"
                  />
                  <div class="list-group-item list-group-item-action d-flex" :class="{active: chosenActivityId === activity.id}">
                    <div class="flex-grow-1">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 fw-bold">{{ activity.name }}</h5>
                      </div>
                    </div>
                  </div>
                </label>
              </template>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal" aria-label="Close" :class="chosenActivityId ? 'btn-success' : 'btn-outline-success disabled'" v-on:click="tabIndex++">
            Next
            <font-awesome-icon icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VolunteerList from "@/components/VolunteerList";
import VolunteerAvailability from "@/components/VolunteerAvailability";
import {useBeneficiaryStore} from "@/stores/beneficiary";
import { Modal } from 'bootstrap'
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
    volunteerActivities: [],
    chosenActivityId: ''
  }),
  created () {
    this.beneficiaryStore.fetchActivities();
  },
  methods: {
    prevTab () {
      this.tabIndex = 0;
    },
    async nextTab () {
      const chosenVolunteerId = this.beneficiaryStore.getChosenVolunteerId;
      await this.axios.get(`/volunteers/${chosenVolunteerId}/activities`)
        .then((response) => {
          this.volunteerActivities = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
      if (this.tabIndex === 0 && this.volunteerActivities.length > 1) {
        new Modal(this.$refs.modalVolunteerActivity).show();
      } else if (this.tabIndex === 1 && this.volunteerActivities.length === 1) {
        await this.confirmedSelection(this.volunteerActivities[0].id)
      } else if (this.tabIndex === 1) {
        await this.confirmedSelection(this.chosenActivityId)
      }
      else {
        this.tabIndex++;
      }
    },
    async confirmedSelection (activityId) {
      const availabilityId = this.beneficiaryStore.getChosenAvailabilityId
      await this.axios.post(`/bookings`, {
        availabilityId,
        activityId
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    changedActivity (activityId) {
      this.chosenActivityId = activityId;
    }
  }
}
</script>

<style scoped>

</style>