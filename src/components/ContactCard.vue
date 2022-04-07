<template>
  <div class="card col my-2 m-lg-4 contact-card">
    <div class="card-body">
      <div class="mb-2 d-flex align-items-center">
<!--        <img class="object-fit me-2" width="50" height="50" src="@/assets/img/person.jpg" alt="portrait">-->
        <h5 class="mb-0 card-title fw-bold">{{ booking.firstName + " " + booking.lastName }}</h5>
      </div>
      <p class="mb-1 bold"><font-awesome-icon icon="envelope"/>
        {{ booking.consentSharingVolunteerEmail ? booking.email : "No shared email" }}</p>
      <p class="mb-1"><font-awesome-icon icon="phone"/>
        {{ booking.consentSharingVolunteerPhone ? booking.phoneNumber : "No shared phone number" }}</p>
      <div class="row-cols-1">
        <button class="col btn btn-outline-primary disabled my-1" v-if="booking.consentSharingBeneficiaryEmail"><font-awesome-icon icon="envelope"/> Already shared</button>
        <button class="col btn btn-primary my-1" @click="shareBeneficiaryEmail(booking.id)" v-else><font-awesome-icon icon="envelope"/> Share your email</button>

        <button class="col btn btn-outline-primary disabled" v-if="booking.consentSharingBeneficiaryPhone"><font-awesome-icon icon="phone"/> Already shared</button>
        <button class="col btn btn-primary" @click="shareBeneficiaryPhone(booking.id)" v-else><font-awesome-icon icon="phone"/> Share your phone number</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    booking: {
      required: true,
    }
  },
  methods: {
    async shareBeneficiaryEmail(id) {
      await this.axios.put(`/bookings/${id}/share-email`)
      this.$emit('getBookings')
    },
    async shareBeneficiaryPhone(id) {
      await this.axios.put(`/bookings/${id}/share-phone`)
      this.$emit('getBookings')
    },
  }
}
</script>

<style scoped>

</style>