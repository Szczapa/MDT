<template>
  <MenuSide />
  <div class="page-content p-5 bg-light" id="content">
    <div class="py-4">
      <header class="pb-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-newspaper"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
            />
            <path
              d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
            />
          </svg>
          <span class="fs-4 ms-2 text-light">
            <strong> MDT Central Service</strong></span
          >
        </a>
      </header>

      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-2">
          <h1 class="display-5 fw-bold">Annonce</h1>
          <p class="col-md-8 fs-4">
            Bienvenue dans le prototype de MDT du service de police du serveur
            LegacyRP! <br />
            Ce MDT est encore en développement, il est donc possible que vous
            rencontriez des bugs. Voici les fonctionnalité possible Actuelle et
            Futur :
          </p>
          <ul>
            <strong>Disponible :</strong>
            <li>
              Ajoute / suppression de nouveaux équipiés pour les grades
              Capitaine et Supérieur
            </li>
            <li>Sécurisation des droit par token</li>
            <li>Affichage des Rapport</li>
            <li>Création de Rapport</li>
            <li>Fonctionnel Format Desktop / tablette / telephone</li>

            <br />
            <strong>Futur :</strong>
            <li>Système de classement des rapports par statut</li>
            <li>Livre des peines</li>
          </ul>
        </div>
      </div>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="pos">
            <div
              class="h-100 p-3 text-white bg-light rounded-3 position-relative"
            >
              <div class="panel-body table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>username</th>
                      <th>grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="worker in workforce" :key="worker.id">
                      <td>{{ worker.firstname }}</td>
                      <td>{{ worker.lastname }}</td>
                      <td>{{ worker.username }}</td>
                      <td>{{ worker.grade }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="btn_gestion">
                <router-link
                  to="/workforce"
                  class="nav-link text-dark font-italic"
                >
                  <span class="btn btn-outline-dark">Voir</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-2 bg-light border rounded-3 listResponsive">
            <div class="row h-100">
              <div
                class="col-xl-6 col-sl-12 mt-1"
                v-for="report in reports"
                :key="report.id"
              >
                <div class="feature rounded-3 col border">
                  <div class="p-3">
                    <div class="feature-icon">
                      <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <h4 class="report_title">{{ report.title }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="pt-3 mt-4 fw-bold text-light border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>
<script>
import MenuSide from "@/components/MenuSide.vue";
export default {
  name: "WorkforceList",
  components: {
    MenuSide,
  },
  data() {
    return {
      workforce: [],
      reports: [],
    };
  },
  async created() {
    const response = await fetch("/workforce");
    this.workforce = await response.json();
    const response2 = await fetch("/reports");
    this.reports = await response2.json();
  },
  props: {},
};
</script>

<style>
.th {
  text-align: center;
}

td {
  font-weight: 600;
  color: rgb(42, 42, 42);
}
.table-bordered > :not(caption) > * > * {
  border: none;
}
.table-responsive {
  max-height: 235px;
  background-color: white;
  height: 235px;
}
.listResponsive {
  max-height: 300px !important;
  overflow-x: hidden;
  overflow-y: auto;
}
.btn_gestion {
  position: absolute;
  bottom: -2px;
  left: 0px;
}
.pos {
  height: 300px !important;
}
</style>
