<template>
  <div class="rb-ModulesList">
    <div class="rb-ModulesList__header">
      Учебные модули
      <router-link :to="{ name: 'ModuleMainPage', params: { id: 'new-module' }}">Создать</router-link>
    </div>
    <v-row>
      <v-col v-for="module in $store.state.modules" :key="module.id" cols="12" md="6">
        <ModuleCard :value="module"/>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import ModuleCard from '@/components/modules/ModuleCard'
import { LOAD_MODULES } from '@/store/mutation-types'

export default {
  name: 'ModulesList',
  components: { ModuleCard },
  data: () => {
    return {

    }
  },
  mounted() {
    this.$store.dispatch(LOAD_MODULES);
  }
}
</script>

<style scoped>

</style>
