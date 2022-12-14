<template>
  <div class="vertical-nav sidebar_background" id="sidebar">
    <button id="sidebarCollapse" class="btn isnotCollapse btn-collapse">
      <i class="fa fa-close"></i>
    </button>
    <button class="btn ContisCollapse bg-light">
      <i class="fa fa-bars"></i>
    </button>
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center">
        <div v-if="userInfo">
          <div @click="redirect" class="nav-link text-dark font-italic">
            <img
              src="../assets/ppBishop.jpg"
              alt="User img"
              width="65"
              class="mr-3 rounded-circle img-thumbnail shadow-sm"
            />
          </div>
          <div class="media-body media_padding">
            <div v-for="user in userInfo" :key="user.id">
              <h4 class="m-0">{{ user.firstname }}</h4>
              <p class="font-weight-light text-muted mb-0">{{ user.grade }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <a href="/signin">Connect</a>
        </div>
      </div>
    </div>

    <p class="text-gray font-weight-bold text-uppercase px-3 small py-3 mb-0">
      Main Menu
    </p>

    <ul class="nav flex-column mb-0">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-dark font-italic">
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <span class="nav_txt"> Central Service</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/report" class="nav-link text-dark font-italic">
          <i class="fa fa-sticky-note" aria-hidden="true"></i>
          <span class="nav_txt"> Rapport</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/workforce" class="nav-link text-dark font-italic">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span class="nav_txt"> Gestion des équipes</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userInfo: [],
    };
  },
  methods: {
    async redirect() {
      const checkToken = await fetch("/checkToken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await checkToken.json();

      if (localStorage.getItem("token") === null || data.error === true) {
        this.$router.push("/signin");
      } else {
        this.$router.push("/account");
      }
    },

    async user() {
      const takeUSer = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorisation: "Bearer " + localStorage.getItem("token"),
        },
      });
      const userResult = await takeUSer.json();

      if (userResult.error === true) {
        this.userInfo = [];
      } else {
        this.userInfo = userResult;
      }
    },
  },
  mounted() {
    this.user();
  },
};
</script>
