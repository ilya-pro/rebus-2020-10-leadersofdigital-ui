<template>
  <v-card :to="{ name: 'ModuleMainPage', params: { id: value.id, detail: 'common' }}">
    <v-row>
      <v-col cols="12" md="4">
        <v-img
          :src="value.cover_picture"
          class="white--text align-start"
          max-height="100%"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        ></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <v-card-title>{{ value.name }}</v-card-title>
        <v-card-subtitle>{{ value.base_idea }}</v-card-subtitle>
        <v-card-text>{{ value.work_hours }} ч  <v-icon>{{ visibility.icon }}</v-icon> {{ visibility.name }}</v-card-text>
      </v-col>
    </v-row>

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
  computed: {
    visibility() {
      let visibility = {
        name: 'Персональный',
        icon: 'mdi-account'
      }
      if (this.value.visibility_level !== 'personal') {
        visibility.name = 'Школьный';
        visibility.icon = 'mdi-earth';
      }
      return visibility;
    }
  }
}
</script>

<style scoped>

</style>
