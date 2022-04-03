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
export default {
  name: "VolunteerList",
  emits: ["input"],
  components: {RadioVolunteer},
  data: () => ({
    chosenVolunteer: '',
    volunteers: []
  }),
  mounted() {
    this.axios.get('/volunteers')
      .then((response) => {
        this.volunteers = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  methods: {
    changedVolunteer (volunteer) {
      console.log(volunteer)
      this.chosenVolunteer = volunteer
      this.$emit('input', this.chosenVolunteer)
    }
  }
}
</script>

<style scoped>

</style>