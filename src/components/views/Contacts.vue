<template>
  <div class="container py-4">
    <h3 class="mb-0">Contacts</h3>
    <div class="row row-cols-1 row-cols-lg-4 justify-content-center m-0">
        <ContactCard
          v-for="contact in contacts"
          :contact="contact"
          :key="contact"
        />
      </div>
  </div>
</template>

<script>
import contacts from "@/assets/js/contacts"
import ContactCard from "@/components/ContactCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacts",
  components: {ContactCard},
  data: () => ({
    contacts
  })
}
</script>

<style scoped>

</style>