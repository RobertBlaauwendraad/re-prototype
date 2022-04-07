<template>
  <h3>Select the activity you want help with</h3>
  <p v-if="activities.length === 0">No activities are available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <CheckboxActivity
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import {capitalize} from "vue";
import CheckboxActivity from "@/components/CheckboxActivity";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  name: "BeneficiaryActivity",
  components: {CheckboxActivity},
  setup() {
    const beneficiaryStore = useBeneficiaryStore()

    return {
      beneficiaryStore
    }
  },
  data: () => ({
    checkedActivities: [],
    currentBeneficiary: 1,
    activities: []
  }),
  methods: {
    capitalize (string) {
      return capitalize(string);
    }
  },
  created() {
    this.beneficiaryStore.fetchActivities();
  },
  mounted() {
    this.axios.get('/activities')
      .then((response) => {
        this.activities = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>