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
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Prénom</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="John"
                value=""
                required=""
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
                value=""
                required=""
              />
              <div class="invalid-feedback">Nom invalide.</div>
            </div>

            <div class="col-6">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="J.Doe"
                  required=""
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
                  required=""
                />
                <div class="invalid-feedback">Prénom Requis.</div>
              </div>
            </div>
            <div class="invalid-feedback">Entrer son nom d'utilisateur</div>

            <div class="col-md-12">
              <label for="grade" class="form-label">Grades</label>
              <select class="form-select" id="grade" required="">
                <option value="">Selection Grade</option>
                <option value="">Cadet</option>
                <option value="">Officier 1</option>
                <option value="">Officier 2</option>
                <option value="">Officier 3</option>
                <option value="">Sergent</option>
                <option value="">Sergent-chef</option>
                <option value="">Lieutenant</option>
                <option value="">Capitaine</option>
                <option value="">Commandant/(e)</option>
              </select>
              <div class="invalid-feedback">
                Selectionner le grade de l'officier
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Valider l'inscription
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "RegisterForm",
  props: {},
};
</script>

<!-- var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};

token(); -->
