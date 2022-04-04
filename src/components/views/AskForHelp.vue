<template>
  <div class="container d-flex flex-column volunteer-container py-4">
    <BeneficiaryActivity
      v-model="chosenActivities"
    />
  </div>
</template>

<script>
import BeneficiaryActivity from "@/components/BeneficiaryActivity";
export default {
  name: "AskForHelp",
  components: {BeneficiaryActivity},
  data: () => ({
    chosenActivities: []
  })
}
</script>

<style scoped>

</style>