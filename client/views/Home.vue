<script>
    import LayoutDefault from "../layouts/LayoutDefault.vue"

    export default {
      name: "Home",
      components: {
        LayoutDefault
      },
      data() {
          return {
            message: "Hello",
            _user: this.$auth0.user,
            _token: this.$auth0.idTokenClaims,
            _isAuthenticated: this.$auth0.isAuthenticated
          };
      },
    };
    
</script>

<template>
  <layout-default>
    <div>{{message}}</div>


    <pre v-if="_isAuthenticated">
        <code>{{ _user }}</code>
    </pre>
    <pre v-if="_isAuthenticated">
        <code>{{ _token }}</code>
    </pre>
  </layout-default>
</template>