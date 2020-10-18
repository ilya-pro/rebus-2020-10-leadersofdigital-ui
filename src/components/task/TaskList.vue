<template>
  <div class="rb-TaskList">
    TaskList
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="2"
        md="2"
      >
        <TaskCard/>
      </v-col>
      <v-col
        sm="2"
        md="2"
      >
        <TaskCard/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TaskCard from '@/components/task/TaskCard'
export default {
name: "TaskList",
  components: { TaskCard }
}
</script>

<style scoped>

</style>
