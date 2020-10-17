<template>
  <v-container class="rb-ModuleMain"
               height="100%">
    Редактор модуля
    <div v-if="$route.params.detail === 'common'">
      <div class="rb-ModuleMain__title title" style="margin-bottom: 15px;">
        <span>Общие данные модуля <v-text-field class="rb-ModuleMain__titleTextField" v-model="$store.state.currentModule.name" label="Название модуля" required ></v-text-field></span>
        <span>статус: {{ $store.state.currentModule.status }}</span>
      </div>
      <v-text-field v-model="$store.state.currentModule.general_concept" label="Общий замысел модуля"></v-text-field>
      <v-text-field v-model="$store.state.currentModule.base_idea" label="Базовая идея" required></v-text-field>
      <v-text-field v-model="$store.state.currentModule.comment" label="Комментарий"></v-text-field>
      <v-text-field v-model="$store.state.currentModule.problematic_question" label="Проблемный вопрос" required></v-text-field>
      <v-row>
        <v-col>
          <v-text-field v-model="$store.state.currentModule.subject" label="Предмет" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="$store.state.currentModule.step" label="Класс" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="$store.state.currentModule.work_hours" label="Академических часов" required></v-text-field>
        </v-col>
      </v-row>
      <v-file-input
        show-size
        truncate-length="15"
        label="Изображение обложки"
      ></v-file-input>
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
.rb-ModuleMain__title {
  display: flex;
  justify-content: space-between;
}
.rb-ModuleMain__titleTextField {
  display: inline-flex;
  width: 300px;
}
</style>
