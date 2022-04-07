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
export default {
  name: "VolunteerActivity"
}
</script>

<style scoped>

</style>