<template>
  <!--          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">-->
  <!--            <div class="d-flex w-100 justify-content-between">-->
  <!--              <h5 class="mb-1">Full Name</h5>-->
  <!--              <small>3 days ago</small>-->
  <!--            </div>-->
  <!--            <p class="mb-1">Description about volunteer.</p>-->
  <!--          </a>-->
  <label class="volunteer-label" :for="volunteer.id">
    <input type="radio" name="availableVolunteer" :value="volunteer.id" :id="volunteer.id"/>
    <div class="list-group-item list-group-item-action d-flex">
      <div class="me-3">
        <img class="object-fit" width="100" height="100" src="@/assets/img/person.jpg" alt="name">
      </div>
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ volunteer.name }}</h5>
          <small class="text-muted">{{ volunteer.date }} days ago</small>
        </div>
        <p class="mb-1">
          {{ volunteer.description }}
        </p>
      </div>
    </div>
  </label>

</template>

<script>
export default {
  name: "AvailableVolunteer",
  props: {
    volunteer: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>