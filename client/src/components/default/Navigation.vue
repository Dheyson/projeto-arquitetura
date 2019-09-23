<template>
  <div>
    <q-header>
      <q-toolbar style="height:150px">
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <div class="text-h2">Logo</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" show-if-above :width="200" :breakpoint="500" content-class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-btn
            color="secondary"
            label="PUBLICAR"
            icon="create"
            class="full-width q-ma-md"
            size="lg"
            @click="sendPost = true"
          />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="local_library" />
            </q-item-section>

            <q-item-section>Resumos</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>Suas Publicações</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>Seu Perfil</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>

            <q-item-section>Configurações</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-dialog v-model="sendPost">
      <SendPost></SendPost>
    </q-dialog>
  </div>
</template>

<script>
import SendPost from "./SendPost";
export default {
    name: 'Navigation',
  data(){
    return {
      sendPost: false,
      left: false
    };
  },
  components: {
    SendPost: SendPost
  }
};
</script>