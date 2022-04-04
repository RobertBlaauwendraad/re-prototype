<template>
  <h3>Select the activity you want help with</h3>
  <p v-if="activities.length === 0">No activities are available!</p>
  <div v-else class="card overflow-auto">
    <div class="list-group list-group-flush">
      <label
        v-for="activity in activities"
        :key="activity.id"
        class="volunteer-label"
        :for="activity.id">
        <input
          type="checkbox"
          name="availableVolunteer"
          :value="activity"
          :id="activity.id"
          v-model="checkedActivities"
        />
        <div class="list-group-item list-group-item-action d-flex" :class="{active: checkedActivities.includes(activity)}">
          <div class="flex-grow-1">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 fw-bold">{{ capitalize(activity.name) }}</h5>
            </div>
            <p class="mb-1">
              {{ activity.description }}
            </p>
          </div>
        </div>
      </label>
    </div>
  </div>
  <div class="row my-4">
    <div class="col d-flex justify-content-end">
      <button
        class="btn "
        :class="checkedActivities.length > 0 ? 'btn-success' : 'btn-outline-success '"
        v-on:click="confirmedSelection"
      >
        Confirm
        <font-awesome-icon icon="check" />
      </button>
    </div>
  </div>
</template>

<script>
import {capitalize} from "vue";
export default {
  name: "BeneficiaryActivity",
  components: {},
  data: () => ({
    checkedActivities: [],
    activities: []
  }),
  methods: {
    // changedActivity (activity) {
    //   this.chosenActivity = activity
    //   this.$emit('input', this.chosenActivity)
    // },
    confirmedSelection () {
      console.log(this.checkedActivities)
    },
    capitalize (string) {
      return capitalize(string);
    }
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