<template>
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
            class="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
            />
            <path
              d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
            />
          </svg>
          <span class="fs-4 ms-2 text-light">
            <strong> Gestion du compte</strong></span
          >
        </a>
      </header>
      <div class="container">ACCOUNT</div>
      <footer class="pt-3 mt-4 fw-bold text-light border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "AccountView",
  methods: {
    async checkgrade() {
      const checkgradeResponse = await fetch("/checkGrade", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Autorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data2 = await checkgradeResponse.json();
      console.log(data2);
      if (data2.error == true) {
        this.$router.push("/signin");
      }
    },
  },
  mounted() {
    this.checkgrade();
  },
};
</script>
