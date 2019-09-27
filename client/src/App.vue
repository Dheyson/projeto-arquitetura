<template>
  <div id="app">
    <q-layout view="hHh lpR lFr">
      <Navigation v-if="isLoggedIn"/>

      <!--isso aqui deve ser renderizado com v-if se tiver token-->
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
    isLoggedIn () {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },

  },
  components: {
    Navigation: Navigation
  }
};
</script>
