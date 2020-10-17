<template>
  <v-card :to="{ name: 'ModuleMainPage', params: { id: value.id }}">
    <v-row>
      <v-col cols="12" md="4">
        <v-img
          src="https://newschool.sberclass.ru/services/storage/download/global/82ebabef-ebd2-49f7-9c7d-76d3da8f7243?path=c1f1758b-243d-4f79-82b3-54094068ce36/cb8a4b52-5992-493f-94f6-9f9934b91ab1/flame_w200.png"
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
