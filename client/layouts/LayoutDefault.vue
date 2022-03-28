<template>
  <div class="LayoutDefault">
    <div class="container">
      <nav class="navbar navbar-dark bg-primary navbar-expand">
        <router-link class="navbar-brand" active-class="active" to="/">Fruit Store</router-link>
        <div class="container-fluid">
        <ul class="nav">
        <!--
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">Home</router-link>
          </li>
          -->
          <li class="nav-item" v-if="_isAuthenticated">
            <router-link class="nav-link" active-class="active" to="/users">Users</router-link>
          </li>
        </ul>
        </div>
        <button type="button" v-if="_isAuthenticated">
          <span></span>
        </button>
        <button type="button" @click="login" v-else>
          Login
        </button>
      </nav>
    </div>
    <div class="container">
      <main class="LayoutDefault__main">
        <slot/>
      </main>
    </div>
    <div class="container">
      <footer class="LayoutDefault__footer">
      &copy; Awesome Company
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      _user: this.$auth0.user,
      _isAuthenticated: this.$auth0.isAuthenticated
    }
  },

  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    }
  }
}
</script>
