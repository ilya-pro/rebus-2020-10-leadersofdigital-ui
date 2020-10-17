<template>
  <v-card class="rb-TaskCard"
          tile>
    <v-card-title>Task Card 2</v-card-title>
    <v-menu
      bottom
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="indigo">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-card>
</template>

<script>
export default {
  name: 'TaskCard',
  data: () => {
    return {
      items: [
        { title: '- не выбран -' },
        { title: 'Цель 2.0 Научиться...' },
        { title: 'Цель 2.0 Уметь ...' },
        { title: 'Цель 3.0 Получить навык ...' },
      ],
    }
  }
}
</script>

<style scoped>

</style>
