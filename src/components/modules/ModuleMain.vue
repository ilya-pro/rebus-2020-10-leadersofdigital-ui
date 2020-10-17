<template>
  <div class="rb-ModuleMain">
    Редактор модуля  «{{ $store.state.currentModule.name }}»   статус: {{ $store.state.currentModule.status }}
    <v-row >
      <!--:cols="8" xs="12" sm="12" lg="8"-->
      <v-col cols="12"  md="8" >
        <ModuleContentTiles />
      </v-col>
      <v-col cols="12" md="4">
        <ModuleContentPreview />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ModuleContentTiles from '@/components/modules/ModuleContentTiles'
import ModuleContentPreview from '@/components/modules/ModuleContentPreview'
import { LOAD_SINGLE_MODULE } from '@/store/mutation-types'
export default {
  name: 'ModuleMain',
  components: { ModuleContentPreview, ModuleContentTiles },
  mounted() {
    this.$store.dispatch(LOAD_SINGLE_MODULE, this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
