<script>
    import LayoutDefault from "../../layouts/LayoutDefault.vue"
    import axios from 'axios'

    export default {
      name: "Suppliers",
      components: {
        LayoutDefault
      },
      created() {
        axios.get('/api/warehouse/suppliers')
            .then(response => {
              this.suppliers = response.data
            })
            .catch(error => {
              console.log(error);
            })
      },
      data() {
          return {
            suppliers: [],
            _user: this.$auth0.user,
            _isAuthenticated: this.$auth0.isAuthenticated
          };
      },
    };

</script>

<template>
  <layout-default>
      <div class="row">
        <div class="col">Supplier</div>
        <div class="col">2</div>
        <div class="col">3</div>
      </div>
      <div v-for="supplier of suppliers" class="row">
        <div class="col"><router-link :to="{ name: 'WarehouseSupplier', params: { supplierUuid: supplier.uuid }}">{{ supplier.name }}</router-link></div>
        <div class="col">{{ supplier }}</div>
        <div class="col">{{ supplier }}</div>
      </div>
  </layout-default>
</template>
