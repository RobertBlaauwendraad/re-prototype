import { defineStore } from "pinia";
import axios from "@/assets/js/axios";

export const useBeneficiaryStore = defineStore('beneficiary', {
  state: () => ({
    activities: []
  }),
  getters: {
    getActivities: (state) => state.activities
  },
  actions: {
    async fetchActivities() {
      await axios.get('/beneficiaries/1/activities')
        .then((response) => {
          this.activities = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async insertActivity(activityId) {
      await axios.post(`/beneficiaries/1/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      await this.fetchActivities();
    },
    async deleteActivity(activityId) {
      await axios.delete(`/beneficiaries/1/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      await this.fetchActivities();
    }
  }
})