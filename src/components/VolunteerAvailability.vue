<template>
  <h3>Availability of {{ chosenVolunteer.firstName + ' ' + chosenVolunteer.lastName }}</h3>
  <p v-if="availability.length === 0">Volunteer is currently not available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <RadioDaytime
        v-for="datetime in availability"
        :datetime="datetime"
        :key="datetime"
        @input="changedDatetime"
      />
    </div>
  </div>
</template>

<script>
import RadioDaytime from "@/components/RadioDatetime";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  name: "VolunteerAvailability",
  components: { RadioDaytime },
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  data: () => ({
    chosenVolunteerId: '',
    chosenVolunteer: {},
    chosenDatetime: '',
    availability: []
  }),
  methods: {
    changedDatetime (daytime) {
      this.chosenDatetime = daytime
      this.$emit('input', this.chosenDatetime)
    }
  },
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
            this.availability.push(availabilityElement)
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