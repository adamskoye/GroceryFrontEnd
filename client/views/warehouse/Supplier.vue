<script>
    import LayoutDefault from "../../layouts/LayoutDefault.vue"
    import axios from 'axios'

    export default {
      name: "Supplier",
      components: {
        LayoutDefault
      },
      created() {
        axios.get('/suppliers/' + this.userId)
            .then(response => {
              this.supplier = response.data
            })
            .catch(error => {
              console.log(error);
            })
      },
      data() {
          return {
            supplier: {},
            _user: this.$auth0.user,
            _isAuthenticated: this.$auth0.isAuthenticated
          };
      },
      props: [
          'supplierUuid'
      ]
    };

</script>

<template>
  <layout-default>
      <div class="row">
        <div class="col">Supplier UUID {{ supplierUuid }}</div>
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
