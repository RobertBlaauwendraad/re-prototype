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
export default {
  name: "VolunteerAvailability",
  components: { RadioDaytime },
  props: {
    chosenVolunteer: {
      required: true
    }
  },
  data: () => ({
    chosenDatetime: '',
    availability: []
  }),
  methods: {
    changedDatetime (daytime) {
      this.chosenDatetime = daytime
      this.$emit('input', this.chosenDatetime)
    }
  },
  mounted() {
    console.log(this.chosenVolunteer)
    this.axios.get(`/volunteers/${this.chosenVolunteer.id}/availability`)
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