import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT,
  LOAD_USER_DATA, SET_USER_DATA,
  LOAD_MODULES, APPLY_MODULES, LOAD_SINGLE_MODULE, APPLY_SINGLE_MODULES, MODULE_SAVE, MODULE_UPDATE, TASK_SAVE
} from './mutation-types'
import {API_BASE_URL} from '@/utils/axios-helper';

Vue.use(Vuex)

export default new Vuex.Store({
  // реактивное состояние
  state: {
    // статус аутентификации
    status: '',

    // токен аутентификации инициализируем из LS, если есть
    token: localStorage.getItem('user-token') || '',

    user: {
      avatarSmall: '',
      groups: []
    },

    // список учебных модулей
    modules: [],

    // текущий модуль
    currentModule: {  },

    // текущая задача
    currentTask: {
      name: 'Новое Задание',
      work_form: 'individual',
      work_minute: '10',
      soft_skills: ['team_work'],
      version: 1
    }
  },
  /*
    фиксация и отслеживание изменений state
    мутации - ТОЛЬКО синхронные изменения
   */
  mutations: {
    [AUTH_REQUEST]: (state) => {
      console.log('m   AUTH_REQUEST');
      state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, data) => {
      state.status = 'success'
      state.token = data.token
      state.user.groups = data.user;
      localStorage.setItem('user-token', data.token); // store the token in localstorage
    },
    [AUTH_ERROR]: (state) => {
      state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
      state.status = '';
      state.token = '';
      localStorage.removeItem('user-token');
    },
    [SET_USER_DATA]: (state, userData) => {
      console.log('userData 3', userData);
      state.user = {
        avatarSmall: userData.little_avatar
      }
    },
    [APPLY_MODULES]: (state, modules) => {
      state.modules = modules;
    },
    [APPLY_SINGLE_MODULES]: (state, currentModule) => {
      state.currentModule = currentModule;
    }
  },
  // обновляет state через вызов mutations
  actions: {
    // запрос подключения
    [AUTH_REQUEST]: ({commit/*, dispatch*/}, user) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit(AUTH_REQUEST);
        axios.post(API_BASE_URL + 'users/login/', user)
          .then(response => {
            console.log('login OK', response.data.token, response.data);
            commit(AUTH_SUCCESS, response.data);
            resolve(response);
          })
          .catch(err => {
            console.log('ERROR');
            commit(AUTH_ERROR, err);
            // if the request fails, remove any possible user token if possible
            localStorage.removeItem('user-token');
            reject(err);
          })
      })
    },
    // выход
    [AUTH_LOGOUT]: ({commit/*, dispatch*/}) => {
      return new Promise((resolve/*, reject*/) => {
        console.log('AUTH_LOGOUT done');
        commit(AUTH_LOGOUT);
        // удаляем пользовательский токен из localstorage
        localStorage.removeItem('user-token');
        resolve();
      })
    },
    // загрузка данных пользователя
    [LOAD_USER_DATA]: (context) => {
      const config = {
        method: 'get',
        url: API_BASE_URL + 'users/profile/',
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      axios(config).then(response => {
        console.log('LOAD_USER_DATA  loaded', response);
        context.commit(SET_USER_DATA, response.data)
      });
    },
    [LOAD_MODULES]: (context) => {
      const config = {
        method: 'get',
        url: API_BASE_URL + 'education/modules/',
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      axios(config).then(response => {
        context.commit(APPLY_MODULES, response.data)
      });
    },
    [LOAD_SINGLE_MODULE]: (context, id) => {
      const config = {
        method: 'get',
        url: API_BASE_URL + `education/modules/${id}/`,
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      axios(config).then(response => {
        context.commit(APPLY_SINGLE_MODULES, response.data)
      });
    },
    [MODULE_SAVE]: (context) => {
      const auth = {
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      axios.post(API_BASE_URL + `education/modules/`, context.state.currentModule, auth).then(result => {
        console.log(result.data)
      })
    },
    [MODULE_UPDATE]: (context, moduleId) => {
      const auth = {
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      console.log('MODULE_UPDATE', context.state.currentModule);
      axios.patch(API_BASE_URL + 'education/modules/' + moduleId + '/', context.state.currentModule, auth).then(result => {
        console.log(result.data)
      }).catch((error) => {
        console.log('error', error)
      });
    },
    [TASK_SAVE]: (context, task) => {
      const auth = {
        headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      console.log('MODULE_UPDATE', context.state.currentModule);
      axios.post(API_BASE_URL + 'education/tasks/', task, auth).then(result => {
        console.log('task save', result.data);
      }).catch((error) => {
        console.log('task save error', error);
      });
    }
  },
  // вычислимые свойства состояния
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  modules: {
  }
})
