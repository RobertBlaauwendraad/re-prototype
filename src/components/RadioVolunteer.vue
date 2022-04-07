<template>
  <label :for="volunteer.id">
    <input type="radio" name="volunteer" :value="volunteer.id" :id="volunteer.id"
          @change="beneficiaryStore.setChosenVolunteerId(volunteer.id)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: beneficiaryStore.getChosenVolunteerId === volunteer.id}">
<!--      <div class="me-3">-->
<!--        <img class="object-fit" width="100" height="100" src="@/assets/img/person.jpg" alt="portrait">-->
<!--      </div>-->
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-0 fw-bold">{{ volunteer.firstName + ' ' + volunteer.lastName}}</h5>
        </div>
        <p class="mb-2" :class="{'text-muted': beneficiaryStore.getChosenVolunteerId !== volunteer.id}">{{ this.activitiesString.slice(0, -3) }}</p>
        <p class="mb-1">
          {{ volunteer.description }}
        </p>
      </div>
    </div>
  </label>
</template>

<script>
import {useBeneficiaryStore} from "@/stores/beneficiary";

export default {
  name: "RadioVolunteer",
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  props: {
    volunteer: {
      required: true,
    }
  },
  data: () => ({
    activitiesString: ''
  }),
  async mounted() {
    await this.axios.get(`/volunteers/${this.volunteer.id}/activities`)
      .then((response) => {
        const activities = response.data;
        for (const activity of activities) {
          this.activitiesString += activity.name + ' / '
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>