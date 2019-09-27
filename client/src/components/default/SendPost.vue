<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row items-center">
      <div class="text-h6">Envie seu resumo</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-form @submit.prevent="submitPost">
        <q-input filled label="Título" class="q-mb-md" color="secondary" v-model="form.title" />
        <q-input
          filled
          label="Descrição"
          type="textarea"
          color="secondary"
          class="q-mb-md"
          v-model="form.description"
        />
        <div class="row q-mb-md">
          <q-select
            filled
            label="Disciplina"
            class="q-pr-sm col-6"
            color="secondary"
            :options="disciplines"
            v-model="form.discipline"
          />
          <q-select
            filled
            label="Assunto"
            class="q-pl-sm col-6"
            color="secondary"
            :options="topics"
            v-model="form.topic"
          />
        </div>
        <q-input
          @input="val => { form.file = val[0] }"
          filled
          type="file"
          hint="Envie seu resumo"
          class="q-mb-md"
          color="secondary"
        />
        <div class="row">
          <q-space />
          <q-btn flat label="Cancelar" class="q-mx-md" v-close-popup />
          <q-btn label="Publicar" color="secondary" type="submit" class="q-mx-md" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        file: "",
        title: "",
        discipline: "",
        topic: "",
        description: ""
      },
      disciplines: ["...", "...", "..."],
      topics: ["...", "...", "..."]
    };
  },
  methods: {
    submitPost() {
      alert("funfou");
    }
  }
};
</script>

<style>
</style>