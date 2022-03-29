<template>
  <div class="container d-flex flex-column volunteer-container py-4">
      <div class="card mt-4 overflow-auto">
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Full Name</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Description about volunteer.</p>
          </a>
          <AvailableVolunteer
            v-for="n in 10"
            v-bind:key="n"
          />
        </div>
    </div>
    <div class="row my-4">
      <div class="col d-flex justify-content-end">
        <router-link class="btn  btn-success" to="">Check availability <font-awesome-icon icon="arrow-right" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AvailableVolunteer from "@/components/AvailableVolunteer";
export default {
  name: "VolunteerAppointment",
  components: {AvailableVolunteer}

}
</script>

<style scoped>

</style>