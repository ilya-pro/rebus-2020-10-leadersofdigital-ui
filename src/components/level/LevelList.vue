<template>
  <div class="rb-GoalList">
    GoalList
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="3"
        md="6"
      >
        <LevelCard />
      </v-col>
      <v-col
        sm="3"
        md="6"
      >
        <LevelCard />
      </v-col>
      <v-col
        sm="3"
        md="6"
      >
        <LevelCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LevelCard from '@/components/level/LevelCard'
export default {
name: "LevelList",
  components: { LevelCard }
}
</script>

<style scoped>

</style>
