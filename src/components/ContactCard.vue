<template>
  <div class="card col my-2 m-lg-4 contact-card">
    <div class="card-body">
      <div class="mb-2 d-flex align-items-center">
        <img class="object-fit me-2" width="50" height="50" src="@/assets/img/person.jpg" alt="portrait">
        <h5 class="mb-0 card-title fw-bold">{{ contact.name }}</h5>
      </div>
      <p class="mb-1 bold"><font-awesome-icon icon="envelope"/> {{ contact.email ? contact.email : "No shared email" }}</p>
      <p class="mb-1"><font-awesome-icon icon="phone"/> {{ contact.phoneNumber ? contact.phoneNumber : "No shared phone number" }}</p>
      <div class="row-cols-1">
        <button class="col btn btn-outline-primary disabled my-1" v-if="contact.emailShared"><font-awesome-icon icon="envelope"/> Already shared</button>
        <button class="col btn btn-primary my-1" v-else><font-awesome-icon icon="envelope"/> Share your email</button>

        <button class="col btn btn-outline-primary disabled" v-if="contact.phoneNumberShared"><font-awesome-icon icon="phone"/> Already shared</button>
        <button class="col btn btn-primary" v-else><font-awesome-icon icon="phone"/> Share your phone number</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    contact: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>