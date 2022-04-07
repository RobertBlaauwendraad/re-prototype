<template>
  <label :for="activity">
    <input type="radio" name="radioActivity" :value="activity" :id="activity"
      @change="changedActivity"
    />
    <div class="list-group-item list-group-item-action d-flex">
      <div class="flex-grow-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 fw-bold">{{ activity.name }}</h5>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "RadioActivity",
  props: {
    activity: {
      required: true
    }
  },
  methods: {
    changedActivity() {

    }
  }
}
</script>

<style scoped>

</style>