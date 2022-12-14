<template>
  <MenuSide />
  <div class="page-content p-5 bg-light" id="content">
    <div class="py-4">
      <header class="pb-3 mb-4 border-bottom">
        <a
          href="/workforce"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
            />
          </svg>
          <span class="fs-4 ms-2 text-light">
            <strong> Gestion des employées</strong></span
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
                fill="currentColor"
                class="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                />
                <path
                  d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <WorkforceList />
      <footer class="pt-3 mt-4 fw-bold text-light border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkforceList from "@/components/WorkForce.vue";
import MenuSide from "@/components/MenuSide.vue";

export default {
  name: "WorkforceView",
  components: {
    WorkforceList,
    MenuSide,
  },
  methods: {
    async redirect() {
      console.log("ici");
      const checkToken = await fetch("/checkGrade", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await checkToken.json();

      if (localStorage.getItem("token") === null || data.error === true) {
        alert(data.errorMessage);
      } else {
        this.$router.push("/register");
      }
    },
  },
};
</script>
