<template>
  <label class="volunteer-label" :for="activity.id">
    <input
      type="checkbox"
      name="availableVolunteer"
      :value="modelValue"
      :id="activity.id"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: this.$parent.chosenActivity === activity}">
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
</template>

<script>
import {capitalize} from "vue";

export default {
  name: "CheckboxActivity",
  props: {
    modelValue: {
      required: true
    },
    activity: {
      required: true
    }
  },
  methods: {
    capitalize (string) {
      return capitalize(string);
    }
  }
}
</script>

<style scoped>

</style>