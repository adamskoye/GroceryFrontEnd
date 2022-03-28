import { createApp } from "vue";
import { createAuth0 } from '@auth0/auth0-vue';
import $ from "jquery"
import bootstrap from "bootstrap"

require('bootstrap-icons/font/bootstrap-icons.css');

import router from "./router"
// import DeviceId from "./components/DeviceId.vue"
// import SortableHeader from "./components/SortableHeader.vue"
//
// import CompanyDetails from "./components/CompanyDetails.vue"
// import CompanyUsers from "./components/CompanyUsers.vue"
//
// import UserDetails from "./components/UserDetails.vue"
// import UserDevices from "./components/UserDevices.vue"
// import UserPings from "./components/UserPings.vue"
// import UserOverlaps from "./components/UserOverlaps.vue"

//import tooltip from "./directives/tooltip"

import "./styles/style.scss"

//console.log(bootstrap.Tooltip)
//console.log($)

const fruitStoreApp = createApp({

})

// Utility Components
// cheatersApp.component("device-id", DeviceId)
// cheatersApp.component("sortable-header", SortableHeader)
//
// // Company Views
// cheatersApp.component("company-details", CompanyDetails)
// cheatersApp.component("company-users", CompanyUsers)
//
// // User Views
// cheatersApp.component("user-details", UserDetails)
// cheatersApp.component("user-devices", UserDevices)
// cheatersApp.component("user-overlaps", UserOverlaps)
// cheatersApp.component("user-pings", UserPings)
//
// // Tooltips
// cheatersApp.directive("tooltip", tooltip)


fruitStoreApp.use(
    createAuth0({
          domain: "adamknight.us.auth0.com",
          client_id: "QXcUQGbumllCisGPk80WQde49a5WttMT",
          redirect_uri: window.location.origin
        }
    )
);

fruitStoreApp.use(router)
fruitStoreApp.mount('#app')

export default fruitStoreApp