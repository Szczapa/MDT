<template>
  <div class="page-content p-5 bg-light" id="content">
    <div class="py-4">
      <main class="form-signin bg-light rounded-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="57"
            fill="dark"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <h1 class="h3 mb-3">Connection</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="userName"
              placeholder="userName"
              v-model="logUser.userName"
            />
            <label for="floatingInput">Nom utilisateur</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              v-model="logUser.password"
            />
            <label for="password">Mot de passe</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" v-on:click="loginUser">
            Connection
          </button>
        </div>
      </main>
      <div>{{ logUser.userName }}</div>
      <div>{{ logUser.password }}</div>
      <footer class="pt-3 mt-4 fw-bold text-light border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginSystem",
  data() {
    return {
      logUser: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      if (this.logUser.userName == "" && this.logUser.password == "") {
        alert("Veuillez remplir les champs");
      } else {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.logUser),
        });
        const data = await response.json();
        console.log(data);
        if (data.token) {
          alert("Connexion réussie");
          localStorage.setItem("token", data.token);

          this.$router.push("/account");
        } else {
          alert("Connexion échouée");
        }
      }
    },
  },
};
</script>
