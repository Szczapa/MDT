<template>
  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom text-light fw-bold">Rapport en cours</h2>
    <div class="row">
      <div
        class="col-xl-4 col-lg-12"
        v-for="report in ActiveReport"
        :key="report.id"
      >
        <div class="p-3">
          <div class="feature col border rounded-3">
            <div class="p-3 rounded-3">
              <div
                class="feature-icon d-flex justify-content-between position-relative"
              >
                <i class="fa fa-file" aria-hidden="true"></i>
                <i
                  class="fa fa-cog menu_report"
                  aria-hidden="true"
                  id="{{report.id}}"
                ></i>
                <div
                  class="position-absolute menu_container_open bg-dark text-light rounded-3"
                >
                  <div class="row listOpen_option" id="{{report.id + 1000}}">
                    <div class="col-12">Classer</div>
                    <div class="col-12">Supprimer</div>
                  </div>
                </div>
              </div>
              <h2>{{ report.title }}</h2>
              <p>
                {{ report.content }}
              </p>
              <a href="#" class="btn btn-info">
                Lire la suite
                <i class="fa fa-arrow-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="pb-2 border-bottom text-light fw-bold mt-5">Rapport classés</h2>
    <div class="row">
      <div
        class="col-xl-4 col-lg-12"
        v-for="report in ClosedReports"
        :key="report.id"
      >
        <div class="p-3">
          <div class="feature col border rounded-3">
            <div class="p-3 rounded-3">
              <div
                class="feature-icon d-flex justify-content-between position-relative"
              >
                <i class="fa fa-file" aria-hidden="true"></i>
                <i
                  class="fa fa-cog menu_report"
                  aria-hidden="true"
                  id="{{report.id}}"
                ></i>
                <div
                  class="position-absolute menu_container_close bg-dark text-light rounded-3"
                  id="{{report.id + 1000}}"
                >
                  <div class="row listclasse_option">
                    <div class="col-12">Ouvrir</div>
                    <div class="col-12">Supprimer</div>
                  </div>
                </div>
              </div>
              <h2>{{ report.title }}</h2>
              <p>
                {{ report.content }}
              </p>
              <a href="#" class="btn btn-info">
                Lire la suite
                <i class="fa fa-arrow-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportList",
  data() {
    return {
      reports: [],
    };
  },
  async created() {
    const response = await fetch("/reports");
    this.reports = await response.json();
  },
  computed: {
    ClosedReports() {
      return this.reports.filter((report) => {
        return report.statut == 2;
      });
    },
    ActiveReport() {
      return this.reports.filter((report) => {
        return report.statut == 1;
      });
    },
  },
  props: {},
  methods: {},
};
</script>
