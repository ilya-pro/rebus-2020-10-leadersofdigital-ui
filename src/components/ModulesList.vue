<template>
  <div class="rb-ModulesList">
    Учебные модули
    <router-link :to="{ name: 'ModuleMainPage', params: { id: 'new-module' }}">Создать</router-link>
  </div>

</template>

<script>
export default {
  name: 'ModulesList'
}
</script>

<style scoped>

</style>
