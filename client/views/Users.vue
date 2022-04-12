<script>
    import LayoutDefault from "../layouts/LayoutDefault.vue"
    import userService from "../services/userService";

    export default {
      name: "Users",
      components: {
        LayoutDefault
      },
      async created() {
        this.users = userService.getUsers()
      },
      data() {
          return {
            users: [],
            _user: this.$auth0.user,
            _isAuthenticated: this.$auth0.isAuthenticated
          };
      },
    };
    
</script>

<template>
  <layout-default>
      <div class="row">
        <div class="col">User ID</div>
        <div class="col">Email</div>
        <div class="col">Name</div>
      </div>
      <div v-for="user of users" class="row">
        <div class="col"><router-link :to="{ name: 'User', params: { userId: user.userId }}">{{ user.userId }}</router-link></div>
        <div class="col">{{ user.email }}</div>
        <div class="col">{{ user.name }}</div>
      </div>
  </layout-default>
</template>