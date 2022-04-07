<template>
  <h3>Availability of {{ chosenVolunteer.firstName + ' ' + chosenVolunteer.lastName }}</h3>
  <p v-if="availabilities.length === 0">Volunteer is currently not available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <RadioAvailability
        v-for="availability in availabilities"
        :availability="availability"
        :key="availability"
      />
    </div>
  </div>
</template>

<script>
import RadioAvailability from "@/components/RadioAvailability";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  name: "VolunteerAvailability",
  components: { RadioAvailability },
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  data: () => ({
    chosenVolunteerId: '', // Gets filled at created from store
    chosenVolunteer: {}, // Gets filled at mounted after API call
    chosenDatetime: '',
    availabilities: [] // Gets filled at mounted after API call
  }),
  async created() {
    this.chosenVolunteerId = this.beneficiaryStore.getChosenVolunteerId
  },
  async mounted() {
    await this.axios.get(`/volunteers/${this.chosenVolunteerId}`)
      .then((response) => {
        this.chosenVolunteer = response.data
      })
      .catch((error) => {
        console.log(error);
      })

    await this.axios.get(`/volunteers/${this.chosenVolunteerId}/availability`)
      .then((response) => {
        const availability = response.data;
        for (const availabilityElement of availability) {
          const today = new Date().setHours(0, 0, 0, 0)
          const datetimeFrom = Date.parse(availabilityElement.datetimeFrom)
          if (today < datetimeFrom) {
            this.availabilities.push(availabilityElement)
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>