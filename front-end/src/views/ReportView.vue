<template>
  <MenuSide />
  <div class="page-content p-5 bg-light" id="content">
    <div class="py-4">
      <header class="pb-3 mb-4 border-bottom">
        <a
          href="/report"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-clipboard"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            />
          </svg>
          <span class="fs-4 ms-2 text-light">
            <strong>Systeme de Rapport</strong></span
          >
        </a>
      </header>
      <div class="row">
        <div class="col">
          <div class="btn" @click="redirect">
            <span class="nav_txt"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-file-earmark-plus"
                viewBox="0 0 16 16"
                @click="redirect"
              >
                <path
                  d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <ReportList />
      <footer class="pt-3 mt-4 fw-bold text-light border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>
<script>
import ReportList from "@/components/ReportList.vue";
import MenuSide from "@/components/MenuSide.vue";
export default {
  name: "ReportView",
  components: {
    ReportList,
    MenuSide,
  },
  methods: {
    redirect() {
      this.$router.push("/addreport");
    },
  },
};
</script>
