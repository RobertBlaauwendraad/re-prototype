<template>
  <Navbar/>
  <div class="navbar-height"></div>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>