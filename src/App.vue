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
      <v-container v-if="$route.path.includes('/modules/')"
                   class="d-flex justify-space-between align-center">
        <v-tabs background-color="transparent">
          <v-tab :to="{ path: `/modules/${this.$route.params.id}/common` }">Общее</v-tab>
          <v-tab :to="{ path: `/modules/${this.$route.params.id}/scheme` }">Схема</v-tab>
        </v-tabs>
        <!-- добавление задачи только после сохранения модуля -->
        <v-btn
          v-if="!$route.path.includes('/modules/new-module')"
          class="ml-5"
          elevation="2"
          color="primary"
          @click="addTask()"
        >+ Задача</v-btn>

        <v-btn
          class="ml-5"
          color="primary"
          elevation="2"
          @click="sendToCheck()"
        >Автопроверка</v-btn>
        <v-btn
          class="ml-5"
          elevation="2"
          color="success"
          @click="moduleSave()"
        >Сохранить</v-btn>
      </v-container>

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
import Drawer from '@/components/Drawer'
import { LOAD_USER_DATA, MODULE_SAVE, MODULE_UPDATE, TASK_CHECK } from '@/store/mutation-types'

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
    addTask() {
      this.$router.push(`/modules/${this.$route.params.id}/task/new-task`);
    },
    moduleSave() {
      // отправляем стору на сохранение
      if (this.$route.params.id === 'new-module') {
        // новый модуль
        this.$store.dispatch(MODULE_SAVE, this.$store.state.currentModule);
      } else {
        // существующий модуль
        this.$store.dispatch(MODULE_UPDATE, this.$route.params.id);
      }

    },
    sendToCheck() {
      // TODO брать от текущей задачи
      var taskId = 2;
      this.$store.dispatch(TASK_CHECK, taskId);
    }
  },
  mounted () {
    // если токена нет, выходим на страницу логина
    if (!this.$store.state.token) {
      this.$router.push('/login');
    } else {
      this.$store.dispatch(LOAD_USER_DATA);
    }
  }
}
</script>
