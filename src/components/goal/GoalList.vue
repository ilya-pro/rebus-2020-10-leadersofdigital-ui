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
        <GoalCard />
      </v-col>
      <v-col
        sm="3"
        md="6"
      >
        <GoalCard />
      </v-col>
      <v-col
        sm="3"
        md="6"
      >
        <GoalCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GoalCard from '@/components/goal/GoalCard'
export default {
name: "GoalList",
  components: { GoalCard }
}
</script>

<style scoped>

</style>
