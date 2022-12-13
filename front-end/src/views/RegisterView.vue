<template>
  <div class="page-content p-5 bg-light vh-100" id="content">
    <button class="btn ContisnotCollapse">
      <i class="fa fa-bars"></i>
    </button>
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
            fill="currentColor"
            class="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
            />
          </svg>
          <span class="fs-4 ms-2"> <strong>Inscription</strong></span>
        </a>
      </header>
      <RegisterForm />
      <footer class="pt-3 mt-4 text-muted border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "RegisterView",
  components: {
    RegisterForm,
  },
};
</script>
