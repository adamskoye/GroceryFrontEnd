import { createWebHashHistory, createRouter } from "vue-router";

// import CheatersListView from "./views/CheatersList.vue"
// import UserView from "./views/User.vue"
// import CompanyView from "./views/Company.vue"
// import NotFound from "./views/NotFound.vue"

const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: CheatersListView,
    // },
    // {
    //     path: "/user/:userUuid",
    //     name: "user",
    //     component: UserView,
    //     props: true
    // },
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
    history: createWebHashHistory(),
    routes,
});

export default router;