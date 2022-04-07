<template>
  <h3>Available volunteers</h3>
  <p v-if="beneficiaryStore.getVolunteers.length === 0">No volunteers are currently available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <RadioVolunteer
        v-for="volunteer in beneficiaryStore.getVolunteers"
        :volunteer="volunteer"
        :key="volunteer"
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
  data: () => ({
  }),
  created() {
    this.beneficiaryStore.fetchVolunteers();
  }
}
</script>

<style scoped>

</style>