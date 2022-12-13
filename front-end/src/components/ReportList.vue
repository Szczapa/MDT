<template>
  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Rapport en cours</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div v-for="report in reports" :key="report.id">
        <div class="p-3">
          <div class="feature col border">
            <div class="p-3">
              <div class="feature-icon">
                <i class="fa fa-file" aria-hidden="true"></i>
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
    <h2 class="pb-2 border-bottom">Rapport classé</h2>
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
  computed: {},
  props: {},
  methods: {},
};
</script>
