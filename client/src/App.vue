<template>
  <div id="app">
    <q-layout view="hHh lpR lFr">
       <Navigation /> <!-- v-if no token da autenticação -->
    <q-page-container>
      <router-view />
    </q-page-container>
    </q-layout>
  </div>
</template>

<script>
  import Navigation from "./components/default/Navigation";
    export default {
      computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
      methods: {
        logout: function() {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/login");
          });
        }
      },
      components:{
        Navigation
      }
    };
    </script>