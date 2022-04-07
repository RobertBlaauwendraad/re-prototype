import { defineStore } from "pinia";
import axios from "@/assets/js/axios";

export const useBeneficiaryStore = defineStore('beneficiary', {
  state: () => ({
    beneficiaryId: 1,
    activities: [],
    volunteers: [],
    chosenVolunteerId: '',
    chosenAvailabilityId: '',
  }),
  getters: {
    getBeneficiaryId: (state) => state.beneficiaryId,
    getActivities: (state) => state.activities,
    getVolunteers: (state) => state.volunteers,
    getChosenVolunteerId: (state) => state.chosenVolunteerId,
    getChosenAvailabilityId: (state) => state.chosenAvailabilityId
  },
  actions: {
    async fetchActivities() {
      await axios.get(`/beneficiaries/${this.beneficiaryId}/activities`)
        .then((response) => {
          this.activities = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async fetchVolunteers() {
      await axios.get(`/beneficiaries/${this.beneficiaryId}/volunteers`)
        .then((response) => {
          this.volunteers = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async insertActivity(activityId) {
      await axios.post(`/beneficiaries/${this.beneficiaryId}/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      // Fetch both activities and volunteers since both rely on activities
      await this.fetchActivities();
      await this.fetchVolunteers();
    },
    async deleteActivity(activityId) {
      await axios.delete(`/beneficiaries/${this.beneficiaryId}/activities/${activityId}`)
        .catch((error) => {
          console.log(error);
        })
      // Fetch both activities and volunteers since both rely on activities
      await this.fetchActivities();
      await this.fetchVolunteers();
    },
    setChosenVolunteerId(id) {
      this.chosenVolunteerId = id;
    },
    setChosenAvailabilityId(id) {
      this.chosenAvailabilityId = id;
    }
  }
})