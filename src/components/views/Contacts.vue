<template>
  <div class="container py-4">
    <h3 class="mb-0">Contacts</h3>
    <div class="row row-cols-1 row-cols-lg-4 justify-content-center m-0">
        <ContactCard
          v-for="booking in bookings"
          :booking="booking"
          :key="booking"
          @get-bookings="getBookings"
        />
      </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
import {useBeneficiaryStore} from "@/stores/beneficiary";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacts",
  components: {ContactCard},
  setup() {
    const beneficiaryStore = useBeneficiaryStore()
    return {
      beneficiaryStore
    }
  },
  data: () => ({
    bookings: []
  }),
  async created() {
    await this.getBookings();
  },
  methods: {
    async getBookings () {
      const beneficiaryId = this.beneficiaryStore.getBeneficiaryId
      await this.axios.get(`/beneficiaries/${beneficiaryId}/bookings`)
        .then((response) => {
          this.bookings = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>

</style>