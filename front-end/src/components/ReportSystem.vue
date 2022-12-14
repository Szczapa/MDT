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
        <div class="needs-validation" novalidate="">
          <div class="form-group">
            <label for="title">Titre</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Titre du rapport"
              v-model="reportToAdd.title"
            />
          </div>
          <div class="form-group mt-2">
            <label for="report">Zone de rapport</label>
            <textarea
              class="form-control"
              id="report"
              rows="3 "
              v-model="reportToAdd.report"
            ></textarea>
          </div>
          <hr class="my-4" />
          <button class="w-100 btn btn-primary btn-lg" v-on:click="postReport">
            Soumettre le Rapport
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "ReportForm",
  props: {},
  data() {
    return {
      reportToAdd: {
        report: "",
        title: "",
      },
    };
  },
  methods: {
    async postReport() {
      if (this.reportToAdd.report === "" || this.reportToAdd.title === "") {
        alert(
          "L'enregistrement est incomplet. Veuillez remplir tous les champs."
        );
        return;
      }
      const postReport = await fetch("/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(this.reportToAdd),
      });

      const response = await postReport.json();
      if (response.error === false) {
        alert(response.successMessage);
        this.$router.push("/report");
      } else {
        alert(response.errorMessage);
      }
    },
  },
};
</script>
