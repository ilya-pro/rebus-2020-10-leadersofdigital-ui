<template>
  <div class="rb-GoalList mb-10">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="level in $store.state.currentModule.levels"
        :key="level.id"
        sm="3"
        md="12"
      >
        <LevelCard :value="level"/>
      </v-col>
    </v-row>
    <div v-if="!$store.state.currentModule.levels.length">

    </div>
    <v-card
      class="pa-10"
      outlined
    >
      Целей пока не добавлено. Добавьте их через кнопку "+ Цель" в верхней панели
    </v-card>
  </div>
</template>

<script>
import LevelCard from '@/components/level/LevelCard'
export default {
  name: "LevelList",
  components: { LevelCard },
}
</script>

<style scoped>

</style>
