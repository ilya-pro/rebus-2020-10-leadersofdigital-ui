<template>
  <div class="rb-TaskEdit">
    Редактирование задания
    <v-btn
      class="ml-5"
      elevation="2"
      color="success"
      @click="taskSave()"
    >Сохранить задачу</v-btn>
    <v-form v-model="valid"
            ref="form"
            class="mb-4">
      <v-container>
        <v-text-field v-model="$store.state.currentTask.name" label="Наименование задания"
                      required
                      :rules="textRules"
        ></v-text-field>
        <v-text-field v-model="$store.state.currentTask.work_form" label="Форма работы"
                      required
                      :rules="textRules"
        ></v-text-field>
        <v-text-field v-model="$store.state.currentTask.work_minute" label="трудоёмкость, мин"
                      required
                      :rules="textRules"
        ></v-text-field>
        <!-- не должно быть обязательным version -->
        <v-text-field v-model="$store.state.currentTask.version" label="Наименование задания"
                      required
                      :rules="textRules"
        ></v-text-field>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { TASK_SAVE } from '@/store/mutation-types'

export default {
  name: 'TaskEdit',
  data: () => ({
    valid: false,
    textRules: [
      text => !!text || 'Поле обязательно'
    ],
  }),
  methods: {
    taskSave() {
      console.log('taskSave', this.$refs.form);
      if (this.$refs.form.validate()) {
        this.$store.dispatch(TASK_SAVE, this.$store.state.currentTask);
      }
    }
  }
}
</script>

<style scoped>

</style>
