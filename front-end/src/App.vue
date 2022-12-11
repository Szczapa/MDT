<template>
  <div class="vertical-nav bg-white" id="sidebar">
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center">
        <img
          src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png"
          alt="..."
          width="65"
          class="mr-3 rounded-circle img-thumbnail shadow-sm"
        />
        <div class="media-body">
          <h4 class="m-0">Jason Doe</h4>
          <p class="font-weight-light text-muted mb-0">Web developer</p>
        </div>
      </div>
    </div>

    <p class="text-gray font-weight-bold text-uppercase px-3 small py-3 mb-0">
      Main Menu
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-dark font-italic">
          <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>Go to
          Home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link text-dark font-italic">
          <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>About view
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
          Pie charts
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
          Line charts
        </a>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}
</style>
