<template>
  <v-container class="rb-ModuleMain"
               height="100%">
    Редактор модуля  «{{ $store.state.currentModule.name }}»   статус: {{ $store.state.currentModule.status }}
    <div v-if="$route.params.detail === 'common'">
      Общие данные
    </div>
    <v-row  v-if="$route.params.detail === 'scheme'">
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
    if (this.$route.params.id === 'new-module') {
      // Новый модуль. Загружать нечего, предоставляем пустые поля, для заполнения
      console.log('Новый модуь');
    } else {
      console.log('Существующий модуль');
      // Существующий модуль - загружаем
      this.$store.dispatch(LOAD_SINGLE_MODULE, this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>
