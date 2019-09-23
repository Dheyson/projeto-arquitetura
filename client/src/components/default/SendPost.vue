<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row items-center">
      <div class="text-h6">Envie seu resumo</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-form>
        <q-input filled label="Título" class="q-my-md" color="secondary" />
        <q-select filled label="Disciplina" class="q-my-md" color="secondary" />
        <q-select filled label="Assunto" class="q-my-md" color="secondary" />
        <div class="row q-my-md items-center">
            <div class="col-1 q-mr-md">
        <q-btn round color="secondary" icon="add_photo_alternate" class="q-mx-md"/>
            </div>
            <div class="col">
        <q-input filled label="Descrição"/>
            </div>
        </div>
        <div class="row">
        <q-btn flat label="Cancelar" />
        <q-space />
        <q-btn label="Publicar" color="secondary" type="submit"/>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style>
</style>