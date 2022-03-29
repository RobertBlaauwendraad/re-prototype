<template>
  <h3>Available volunteers</h3>
  <div class="card overflow-auto">
    <div class="list-group list-group-flush">
      <RadioVolunteer
        v-for="volunteer in volunteers"
        :volunteer="volunteer"
        :key="volunteer"
        @input="changedVolunteer"
      />
    </div>
  </div>
  <p v-if="volunteers.length === 0">No volunteers are currently available!</p>
</template>

<script>
import RadioVolunteer from "@/components/RadioVolunteer";
import volunteers from "@/assets/js/volunteers"
export default {
  name: "VolunteerList",
  components: {RadioVolunteer},
  data: () => ({
    chosenVolunteer: '',
    volunteers
  }),
  methods: {
    changedVolunteer (volunteer) {
      this.chosenVolunteer = volunteer
      this.$emit('input', this.chosenVolunteer)
    }
  }
}
</script>

<style scoped>

</style>