<template>
  <label class="volunteer-label" :for="volunteer.id">
    <input type="radio" name="availableVolunteer" :value="volunteer.id" :id="volunteer.id"
          @change="$emit('input', volunteer)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: this.$parent.chosenVolunteer === volunteer}">
      <div class="me-3">
        <img class="object-fit" width="100" height="100" src="@/assets/img/person.jpg" alt="portrait">
      </div>
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold">{{ volunteer.name }}</h5>
          <small>{{ volunteer.date }} days ago</small>
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
  name: "RadioVolunteer",
  props: {
    volunteer: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>