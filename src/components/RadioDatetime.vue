<template>
  <label class="volunteer-label" :for="datetime.id">
    <input type="radio" name="availableVolunteer" :value="datetime.id" :id="datetime.id"
           @change="$emit('input', datetime)"
    />
    <div class="list-group-item list-group-item-action d-flex" :class="{active: this.$parent.chosenDatetime === datetime}">
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold">{{ this.date }}</h5>
        </div>
        <p class="mb-1">
          {{ this.partOfDay }}
        </p>
      </div>
    </div>
  </label>
</template>

<script>

export default {
  name: "RadioDaytime",
  props: {
    datetime: {
      required: true
    }
  },
  data: () => ({
    date: '',
    partOfDay: ''
  }),
  mounted() {
    const dateTimeFrom = new Date(this.datetime.datetimeFrom);
    const dateTimeTo = new Date(this.datetime.datetimeTo);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    this.date = dateTimeFrom.toLocaleDateString("en", dateOptions);

    const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit' }
    this.partOfDay = dateTimeFrom.toLocaleTimeString("nl", timeOptions) + " - " + dateTimeTo.toLocaleTimeString("nl", timeOptions)
  }
}
</script>

<style scoped>

</style>