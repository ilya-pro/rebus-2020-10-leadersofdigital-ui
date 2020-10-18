<template>
  <div class="rb-LevelEdit">
    Редактирование цели
    <v-btn
      class="ml-5"
      elevation="2"
      color="success"
      @click="levelSave()"
    >Сохранить цель</v-btn>
    <v-form v-model="valid"
            ref="form"
            class="mb-4">
      <v-container>
        <v-select
          v-model="$store.state.currentLevel.level_step"
          :items="levelStepItems"
          item-text="itemText"
          item-value="itemValue"
          label="Уровень"
        ></v-select>
        <v-text-field v-model="$store.state.currentLevel.target" label="Описание элемента цели"
                      required
                      :rules="textRules"
        ></v-text-field>
        <v-text-field v-model="$store.state.currentLevel.example" label="Пример достижения цели (Я могу…)"
                      required
                      :rules="textRules"
        ></v-text-field>
        <p>module: {{$store.state.currentLevel.module}}</p>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { APPLY_LEVEL, LEVEL_SAVE } from '@/store/mutation-types'

export default {
  name: 'LevelEdit',
  data: () => ({
    valid: false,
    textRules: [
      text => !!text || 'Поле обязательно'
    ],
    levelStepItems: [
      { itemText: '2.0', itemValue: '2' },
      { itemText: '3.0', itemValue: '3' },
      { itemText: '4.0', itemValue: '4' },
    ],
  }),
  methods: {
    levelSave() {

      console.log('levelSave', this.$refs.form);
      if (this.$refs.form.validate()) {
        this.$store.dispatch(LEVEL_SAVE, this.$store.state.currentLevel);
      }
    }
  },
  mounted () {
    var moduleId = this.$route.params.id;
    var currentLevel = {
      level_step: '', // Уровень 2,3,4
      target: '', // * Описание элемента цели
      example: '', // * Пример достижения цели (Я могу…)
      module: moduleId // * readonly
    };
    this.$store.commit(APPLY_LEVEL, currentLevel);
  }
}
</script>

<style scoped>

</style>
