<template>
  <label class="volunteer-label" :for="dayPart.id">
    <input type="radio" name="availableVolunteer" :value="dayPart.id" :id="dayPart.id"
           @change="$emit('input', dayPart)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: this.$parent.chosenDayPart === dayPart}">
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ dayPart.date }}</h5>
        </div>
        <p class="mb-1">
          {{ capitalize(dayPart.partOfDay) }}
        </p>
      </div>
    </div>
  </label>
</template>

<script>
import {capitalize} from "vue";

export default {
  name: "RadioDayPart",
  props: {
    dayPart: {
      required: true
    }
  },
  methods: {
    capitalize (string) {
      return capitalize(string)
    }
  }
}
</script>

<style scoped>

</style>