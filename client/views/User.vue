<script>
    import LayoutDefault from "../layouts/LayoutDefault.vue"
    import axios from 'axios'

    export default {
      name: "User",
      components: {
        LayoutDefault
      },
      created() {
        axios.get('/users/' + this.userId)
            .then(response => {
              this.user = response.data
            })
            .catch(error => {
              console.log(error);
            })
      },
      data() {
          return {
            user: {},
            _user: this.$auth0.user,
            _isAuthenticated: this.$auth0.isAuthenticated
          };
      },
      props: [
          'userId'
      ]
    };
    
</script>

<template>
  <layout-default>
      <div class="row">
        <div class="col">User ID {{ userId }}</div>
        <div class="col">Email</div>
        <div class="col">Name</div>
      </div>
<!--      <div v-for="user of users" class="row">-->
<!--        <div class="col">{{ user.userId }}</div>-->
<!--        <div class="col">{{ user.email }}</div>-->
<!--        <div class="col">{{ user.name }}</div>-->
<!--      </div>-->
  </layout-default>
</template>