<template>
  <main>
    <div class="py-5 text-center">
      <h2>Formulaire de Création de Rapport</h2>
      <p class="lead">
        Ce formulaire vous permet de rédiger un rapport de service. Vous devez
        remplir tous les champs pour pouvoir continuer.
      </p>
    </div>

    <div class="row">
      <div class="col-md-7 col-lg-12">
        <h4 class="mb-3">Rapport</h4>
        <form class="needs-validation" novalidate="">
          <div class="form-group">
            <label for="title">Titre</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Titre du rapport"
            />
          </div>
          <div class="form-group mt-2">
            <label for="textarea">Zone de rapport</label>
            <textarea class="form-control" id="textarea" rows="3"></textarea>
          </div>
          <hr class="my-4" /> 
          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Soumettre le Rapport
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "ReportForm",
  props: {},
};
</script>
