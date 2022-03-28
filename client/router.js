import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/Home.vue"
import UserView from "./views/User.vue"
import UsersView from "./views/Users.vue"
// import CompanyView from "./views/Company.vue"
// import NotFound from "./views/NotFound.vue"
import WarehouseSupplierView from "./views/warehouse/Supplier.vue"
import WarehouseSuppliersView from "./views/warehouse/Suppliers.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/users",
        name: "Users",
        component: UsersView,
    },
    {
        path: "/user/:userId",
        name: "User",
        component: UserView,
        props: true
    },
    {
        path: "/warehouse/suppliers",
        name: "WarehouseSuppliers",
        component: WarehouseSuppliersView,
    },
    {
        path: "/warehouse/supplier/:supplierUuid",
        name: "WarehouseSupplier",
        component: WarehouseSupplierView,
        props: true
    },
    // {
    //     path: "/company/:companyUuid",
    //     name: "company",
    //     component: CompanyView,
    //     props: true
    // },
    // {
    //     path: "/:catchAll(.*)",
    //     component: NotFound,
    // }
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHashHistory(),
  routes,
});

export default router;
