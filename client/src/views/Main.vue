<template>
  <q-layout>
    <q-header>
      <!--menu superior-->
      <q-toolbar class="bg-primary text-white">
        <q-btn flat label="Resumidos" />
        <q-space />
        <q-btn
          flat
          class="bg-secondary text-white q-mx-sm"
          label="Acesse sua conta"
          @click="loginDialog = true"
        />
      </q-toolbar>
    </q-header>

    <!--dialog de login-->
    <q-dialog v-model="loginDialog" :position="'top'">
      <q-card class="q-my-lg justify-center">
        <q-card-section class="row items-center">
          <div class="text-h6 q-mx-md">Acesse sua conta</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form @submit="submitLogin" class="items-center">
            <q-input
              square
              filled
              v-model="userLogin.username"
              label="Seu email"
              type="email"
              required
              class="q-my-md"
              color="secondary"
            />

            <q-input
              square
              filled
              type="password"
              v-model="userLogin.password"
              label="Sua senha"
              lazy-rules
              required
              class="q-my-md"
              color="secondary"
            />

            <q-btn label="Entrar" type="submit" color="secondary" class="full-width" />
            <!--botão submit-->
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!--conteudo da página-->
    <q-page-container>
      <div class="row content-center bg-grey-2 q-py-md">
        <div class="col-8"></div>
        <div class="col-4 justify-right">
          <q-form @submit="submitRegister" class="q-mb-md">
            <div class="row q-mb-md">
              <div class="col-6 q-pr-sm">
                <q-input
                  square
                  filled
                  v-model="userRegister.name"
                  label="Nome"
                  required
                  color="secondary"
                />
              </div>
              <div class="col-6 q-pl-sm">
                <q-input
                  square
                  filled
                  v-model="userRegister.lastname"
                  label="Sobrenome"
                  required

                  color="secondary"
                />
              </div>
            </div>
            <div class="row q-mb-md">
              <div class="col-6 q-pr-sm">
                <q-input
                  square
                  filled
                  v-model="userRegister.registration"
                  label="Matrícula"
                  required

                  color="secondary"
                />
              </div>
              <div class="col-6 q-pl-sm">
                <q-input
                  square
                  filled
                  v-model="userRegister.course"
                  label="Curso"
                  required
                  color="secondary"
                />
              </div>
            </div>
            <div class="row q-mb-md">
              <q-input
                square
                filled
                v-model="userRegister.username"
                label="E-mail"
                required
                class="col"
                color="secondary"
              />
            </div>
            <div class="row q-mb-md">
              <q-input
                square
                filled
                v-model="userRegister.password"
                label="Senha"
                type="password"
                required
                class="col"
                color="secondary"
              />
            </div>
            <div class="row">
              <q-btn label="Cadastrar" type="submit" color="secondary" class="full-width" />
            </div>
          </q-form>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      loginDialog: false,
      userLogin: {
        username: null,
        password: null
      },
      userRegister: {
        name: null,
        lastname: null,
        registration: null,
        course: null,
        username: null,
        password: null
      }
    };
  },

  methods: {
    submitLogin() {
      const loginRequest = {
        username: this.userLogin.username,
        password: this.userLogin.password
      };

      this.$store
        .dispatch("login", loginRequest)
        .then(() => this.$router.push("/home"))
        .catch(err => console.log(err.message));
    },
    submitRegister() {
      const registerRequest = {
        name: this.userRegister.name,
        lastname: this.userRegister.lastname,
        registration: this.userRegister.registration,
        course: this.userRegister.course,
        username: this.userRegister.username,
        password: this.userRegister.password
      };

      this.$store
        .dispatch("register", registerRequest)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err.message));
    }
  }
};
</script>