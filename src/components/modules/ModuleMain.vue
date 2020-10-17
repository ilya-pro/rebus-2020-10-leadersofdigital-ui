<template>
  <v-container class="rb-ModuleMain"
               height="100%">
    Редактор модуля  «{{ $store.state.currentModule.name }}»   статус: {{ $store.state.currentModule.status }}
    <v-row >
      <!--:cols="8" xs="12" sm="12" lg="8"-->
      <v-col cols="12"  md="8" >
        <!--<ModuleContentTiles />-->
        <GoalList />
        <TaskList />
      </v-col>
      <v-col cols="12" md="4">
        <ModuleContentPreview />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModuleContentPreview from '@/components/modules/ModuleContentPreview'
import { LOAD_SINGLE_MODULE } from '@/store/mutation-types'
import TaskList from '@/components/task/TaskList'
import GoalList from '@/components/goal/GoalList'
export default {
  name: 'ModuleMain',
  components: { GoalList, TaskList, ModuleContentPreview },
  mounted() {
    this.$store.dispatch(LOAD_SINGLE_MODULE, this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
