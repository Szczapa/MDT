<template>
  <main>
    <div class="py-5 text-center">
      <h2>Formulaire d'entrée en service du MDT</h2>
      <p class="lead">
        Ce formulaire vous permet d'inscrire vos agents au MDT. Vous devez
        remplir tous les champs pour pouvoir continuer.
      </p>
    </div>

    <div class="row">
      <div class="col-md-7 col-lg-12">
        <h4 class="mb-3">Informations Agent</h4>
        <div class="needs-validation" novalidate="true" id="register">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Prénom</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="John"
                v-model="userToAdd.firstName"
                required="true"
              />
              <div class="invalid-feedback">Prenom invalide.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Nom de famille</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Doe"
                v-model="userToAdd.lastName"
                required="true"
              />
              <div class="invalid-feedback">Nom invalide.</div>
            </div>

            <div class="col-6">
              <label for="userName" class="form-label">UserName</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  placeholder="JDoe"
                  required="true"
                  v-model="userToAdd.userName"
                />
                <div class="invalid-feedback">Prénom Requis.</div>
              </div>
            </div>
            <div class="invalid-feedback">Entrer son nom d'utilisateur</div>
            <div class="col-6">
              <label for="password" class="form-label">Mot de passe</label>
              <div class="input-group has-validation">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="**JDoe**"
                  required="true"
                  v-model="userToAdd.password"
                />
                <div class="invalid-feedback">Mot de passe Requis.</div>
              </div>
            </div>
            <div class="invalid-feedback">Entrer son nom d'utilisateur</div>

            <div class="col-md-12">
              <label for="grade" class="form-label">Grades</label>
              <select
                class="form-select"
                id="grade"
                required="true"
                v-model="userToAdd.grade"
              >
                <option>Selection Grade</option>
                <option>Cadet</option>
                <option>Officier 1</option>
                <option>Officier 2</option>
                <option>Officier 3</option>
                <option>Sergent</option>
                <option>Sergent-chef</option>
                <option>Lieutenant</option>
                <option>Capitaine</option>
                <option>Commandant/(e)</option>
              </select>
              <div class="invalid-feedback">
                Selectionner le grade de l'officier
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <button class="w-100 btn btn-primary btn-lg" v-on:click="postUser">
            Valider l'inscription
          </button>
        </div>
        <div>{{ userToAdd }}</div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "RegisterForm",
  props: {},
  data() {
    return {
      userToAdd: {
        firstName: "",
        lastName: "",
        userName: "",
        grade: "",
        password: "",
      },
    };
  },
  methods: {
    async postUser() {
      console.log(this.userToAdd);
      if (
        this.userToAdd.firstName === "" ||
        this.userToAdd.lastName === "" ||
        this.userToAdd.userName === "" ||
        this.userToAdd.grade === "" ||
        this.userToAdd.password === ""
      ) {
        alert(
          "L'inscription est incomplète. Veuillez remplir tous les champs."
        );
        return;
      }

      // si firstname contient des chiffres et caractères spéciaux alors alert
      if (
        !this.userToAdd.firstName.match(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
        ) ||
        !this.userToAdd.lastName.match(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
        ) ||
        !this.userToAdd.userName.match(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
        )
      ) {
        alert(
          "Le prénom / nom de famille et Username ne doivent pas contenir de chiffres ou de caractères"
        );
        return;
      }

      await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.userToAdd),
      });
      console.log(JSON.stringify(this.userToAdd));
      // this.$router.push("/login");
    },
  },
};
</script>
