<template>
  <v-btn
    class="ma-2"
    :color="color"
    elevation="2"
    :loading="loading"
    @click="check()"
  >Health check</v-btn>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/utils/axios-helper";

export default {
  name: 'HealthChecker',
  data: () => {
    return {
      color: 'secondary',
      loading: false
    }
  },
  methods: {
    check() {
      this.loading = true;
      this.color = 'secondary';
      const config = {
        method: "get",
        url: API_BASE_URL + "health/",
        headers: { Authorization: "Bearer " + this.$store.state.token }
      };
      axios(config)
        .then((/*response*/) => {
          this.color = 'success';
        }).catch((/*error*/) => {
          this.color = 'error';
        }).finally(() => {
          this.loading = false;
        }
      );
    }
  }
}
</script>

<style scoped>

</style>
