<template>
  <div class="card mt-4 overflow-auto">
    <div class="list-group list-group-flush">
      <AvailableVolunteer
        v-for="volunteer in volunteers"
        :volunteer="volunteer"
        :key="volunteer"
        @input="changedVolunteer"
      />
    </div>
  </div>
</template>

<script>
import AvailableVolunteer from "@/components/AvailableVolunteer";
import volunteers from "@/assets/js/volunteers"
export default {
  name: "VolunteerList",
  components: {AvailableVolunteer},
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