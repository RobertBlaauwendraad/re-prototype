<template>
  <h3>Available volunteers</h3>
  <p v-if="volunteers.length === 0">No volunteers are currently available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <RadioVolunteer
        v-for="volunteer in beneficiaryStore.getVolunteers"
        :volunteer="volunteer"
        :key="volunteer"
        @input="changedVolunteer"
      />
    </div>
  </div>
</template>

<script>
import RadioVolunteer from "@/components/RadioVolunteer";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  name: "VolunteerList",
  components: {RadioVolunteer},
  setup() {
    const beneficiaryStore = useBeneficiaryStore()

    return {
      beneficiaryStore
    }
  },
  emits: ["input"],
  data: () => ({
    chosenVolunteer: '',
    volunteers: []
  }),
  created() {
    this.beneficiaryStore.fetchVolunteers();
  },
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