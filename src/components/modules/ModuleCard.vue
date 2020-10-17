<template>
  <v-card :to="{ name: 'ModuleMainPage', params: { id: value.id }}">
    <v-card-title>{{ value.name }}</v-card-title>
    <v-card-subtitle>{{ value.base_idea }}</v-card-subtitle>
    <v-card-text>{{ value.work_hours }} ч</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ModuleCard",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
