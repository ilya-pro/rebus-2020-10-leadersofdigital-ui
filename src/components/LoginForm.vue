<template>
  <v-row >
    <v-col cols="12"  md="6" >
      <v-form v-model="valid"
              ref="form"
              class="mb-4">
        <v-container>
          <v-text-field
            v-model="email"
            label="Ваш e-mail"
            :rules="emailRules"
            @keydown.enter="loginClick()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Пароль"
            :rules="passwordRules"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @keydown.enter="loginClick()"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-btn color="primary" dark
                 @click="loginClick()"
          >Поехали!
          </v-btn>
        </v-container>
      </v-form>
    </v-col>
    <v-col cols="12" md="6">
      <v-img
        :src="require('../assets/rebus.png')"
        class="my-3"
        contain
        width="300"
      />
    </v-col>
  </v-row>

</template>

<script>
import { AUTH_REQUEST } from '@/store/mutation-types'

export default {
  name: 'LoginForm',
  data: () => ({
    valid: false,
    // TODO change to ''
    email: 'kulibin@mail.ru',
    // правила проверки логина
    emailRules: [
      text => !!text || 'E-mail обязателен'
      // TODO e-mail формат
      // v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    password: '',
    // правила проверки пароля
    passwordRules: [
      text => !!text || 'Пароль обязателен'
    ],
    // отображать пароль
    showPassword: false
  }),
  methods: {
    loginClick () {
      // validation form
      if (!this.$refs.form.validate()) {
        console.log('login fail')
        return
      }
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, {
        email,
        password
      }).then((/*response*/) => {
        // переход на главную страницу
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>
