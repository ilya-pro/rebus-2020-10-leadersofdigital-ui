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
      <!--<v-toolbar-title>{{ this.$route.title }}</v-toolbar-title>-->
      <v-row>
        <v-col>
          <v-tabs v-if="$route.path.includes('/modules/')" background-color="transparent">
            <v-tab :to="{ path: `/modules/${this.$route.params.id}/common` }">Общее</v-tab>
            <v-tab :to="{ path: `/modules/${this.$route.params.id}/scheme` }">Схема</v-tab>
          </v-tabs>
        </v-col>
        <v-spacer/>
        <v-col>
          <v-btn elevation="2"
                 color="success"
                 @click="moduleSave()"
          >Сохранить
          </v-btn>
        </v-col>
      </v-row>

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
import { MODULE_SAVE, MODULE_UPDATE } from '@/store/mutation-types'

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
  }),
  methods: {
    moduleSave() {
      // отправляем стору на сохранение
      if (this.$route.params.id === 'new-module') {
        // новый модуль
        this.$store.dispatch(MODULE_SAVE, this.$store.state.currentModule);
      } else {
        // существующий модуль
        this.$store.dispatch(MODULE_UPDATE, this.$route.params.id);
      }

    }
  }
}
</script>
