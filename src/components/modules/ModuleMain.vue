<template>
  <div class="rb-ModuleMain">
    ModuleMain
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
export default {
  name: 'ModuleMain',
  components: { ModuleContentPreview, ModuleContentTiles }
}
</script>

<style scoped>

</style>
