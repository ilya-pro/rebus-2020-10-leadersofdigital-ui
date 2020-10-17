<template>
  <v-app>
    <!-- navigation drawer -->
    <Drawer v-model="drawer"
            :items="items"
            />

    <!-- header -->
    <v-app-bar app
               color="#262C40"
               dark>
      <!--class="hidden-md-and-up"-->
      <v-app-bar-nav-icon v-if="$store.state.token" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$route.title }}</v-toolbar-title>
      <v-tabs v-if="$route.path.includes('/modules/')">
        <v-tab :to="{ path: `/modules/${this.$route.params.id}/common` }">Общее</v-tab>
        <v-tab :to="{ path: `/modules/${this.$route.params.id}/scheme` }">Схема</v-tab>
      </v-tabs>
      <!--{{ this.$route.params.id }}-->
      <!--<HealthChecker/>-->
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- view for current route -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!--{{ $route.name }}-->
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Drawer from '@/components/Drawer'

export default {
  name: 'App',

  components: {
    Drawer
  },

  data: () => ({
    drawer: false,
    // пункты навигаии
    items: [
      /*{id: 'home', title: 'Главная', icon: 'mdi-star', path: '/'},*/
      {id: 'modules', title: 'Учебные модули', icon: 'mdi-book-outline', path: '/modules'},
      /*{id: 'account', title: 'Аккаунт', icon: 'mdi-account', path: '/account'}*/
      /*{id: 'projects', title: 'Проекты', icon: 'mdi-star', path: '/projects'},
      {id: 'shop', title: 'Магазин', icon: 'mdi-star', path: '/shop'},*/
    ],
  })
}
</script>
