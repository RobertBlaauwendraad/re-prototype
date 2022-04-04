import { defineStore } from "pinia";
import axios from "@/assets/js/axios";

export const useBeneficiaryStore = defineStore('beneficiary', {
  state: () => ({
    id: 1,
    activities: [],
    volunteers: [],
  }),
  getters: {
    getActivities: (state) => state.activities,
    getVolunteers: (state) => state.volunteers
  },
  actions: {
    async fetchActivities() {
      await axios.get(`/beneficiaries/${this.id}/activities`)
        .then((response) => {
          this.activities = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async fetchVolunteers() {
      await axios.get(`/beneficiaries/${this.id}/volunteers`)
        .then((response) => {
          this.volunteers = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async insertActivity(activityId) {
      await axios.post(`/beneficiaries/${this.id}/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      // Fetch both activities and volunteers since both rely on activities
      await this.fetchActivities();
      await this.fetchVolunteers();
    },
    async deleteActivity(activityId) {
      await axios.delete(`/beneficiaries/${this.id}/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      // Fetch both activities and volunteers since both rely on activities
      await this.fetchActivities();
      await this.fetchVolunteers();
    }
  }
})