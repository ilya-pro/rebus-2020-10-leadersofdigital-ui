<template>
  <v-card
    class="rb-GoalCard pa-6"
    :to="{ path: levelPath}"
    tile
    outlined
  >
    <v-card-title>Цель {{ value.level_step }}.0: {{ value.example }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "LevelCard",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    levelPath() {
      var moduleId = this.$route.params.id;
      var levelId = this.value.id;
      return `/modules/${moduleId}/level/${levelId}`
    }
  }
}
</script>

<style scoped>

</style>
