<script>
    export default {
        data() {
            return {
                message: "Hello",
                user: this.$auth0.user,
                isAuthenticated: this.$auth0.isAuthenticated
            };
        },

        methods: {
            login() {
                this.$auth0.loginWithRedirect();
            }
        }
    };
    
</script>

<template>
    <div>{{message}}</div>
    <button @click="login">Log in</button>

    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
    </pre>
</template>