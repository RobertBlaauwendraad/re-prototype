<template>
  <h3>Availability of {{ chosenVolunteer.name }}</h3>
  <div class="card mt-4 overflow-auto">
    <div class="list-group list-group-flush">
      <AvailableDayPart
        v-for="dayPart in futureAvailableDayParts"
        :dayPart="dayPart"
        :key="dayPart"
        @input="changedDayPart"
      />
    </div>
  </div>
</template>

<script>
import AvailableDayPart from "@/components/AvailableDayPart";
export default {
  name: "VolunteerSchedule",
  components: {AvailableDayPart},
  props: {
    chosenVolunteer: {
      required: true
    }
  },
  data: () => ({
    chosenDayPart: '',
  }),
  methods: {
    changedDayPart (dayPart) {
      this.chosenDayPart = dayPart
      this.$emit('input', this.chosenDayPart)
    }
  },
  computed: {
    futureAvailableDayParts: function () {
      if(!Object.prototype.hasOwnProperty.call(this.chosenVolunteer, "availability")) {
        return []
      }
      return this.chosenVolunteer.availability.filter(function(dayPart) {
        const today = new Date().setHours(0, 0, 0, 0)
        const selectedDate = Date.parse(dayPart.date)
        if (today < selectedDate) {
          return dayPart
        }
      })
    }
  }
}
</script>

<style scoped>

</style>