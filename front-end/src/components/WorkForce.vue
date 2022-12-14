<template>
  <div v-if="error" class="text-danger fw-bold">{{ error }}</div>
  <div v-if="success" class="text-success fw-bold">{{ success }}</div>
  <table class="table bg-light rounded-3">
    <thead>
      <tr>
        <th scope="col">Prénom</th>
        <th scope="col">Nom</th>
        <th scope="col">Pseudo</th>
        <th scope="col">grade</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="worker in workforce" :key="worker.id">
        <td>{{ worker.firstname }}</td>
        <td>{{ worker.lastname }}</td>
        <td>{{ worker.username }}</td>
        <td>{{ worker.grade }}</td>
        <td class="d-flex justify-content-evenly">
          <div @click="deleteWorker(worker.id)" class="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-dash"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
              <path
                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
              />
            </svg>
          </div>
          <div @click="modifyWorker(worker.id)" class="modify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-fill-gear"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
              />
            </svg>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "WorkforceList",
  data() {
    return {
      error: null,
      success: null,
      workforce: [],
    };
  },
  async created() {
    const response = await fetch("/workforce");
    this.workforce = await response.json();
  },
  props: {},
  methods: {
    async deleteWorker(id) {
      const response = await fetch(`/workforce/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      console.log(result);
      if (result.error == false) {
        this.workforce = this.workforce.filter((worker) => worker.id !== id);
        this.success = result.successMessage;
      } else {
        this.error = result.errorMessage;
      }
    },

    async modifyWorker(id) {
      const response = await fetch(`/workforce/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      if (result.error == false) {
        alert("Modification disponible dans une prochaine mise à jour");
      } else {
        alert("Modif impossible");
      }
    },
  },
};
</script>
