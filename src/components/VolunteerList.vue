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
export default {
  name: "VolunteerList",
  components: {AvailableVolunteer},
  props: {
    volunteers: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    chosenVolunteer: ''
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