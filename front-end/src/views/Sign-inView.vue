<template>
  <div class="page-content p-5 bg-light vh-100" id="content">
    <div class="py-4">
      <main class="form-signin">
        <form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="57"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <h1 class="h3 mb-3 fw-normal">Connection</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Adresse Mail</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Mot de passe</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Connection
          </button>
        </form>
      </main>
      <footer class="pt-3 mt-4 text-muted border-top">
        © MDT-Systeme 2022
      </footer>
    </div>
  </div>
</template>
