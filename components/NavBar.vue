<script setup>
import { ref } from 'vue';

const drawer = ref(null);

const {  data , signOut  } = useAuth()

</script>

<template>
    <v-navigation-drawer theme="customDark" :elevation="12" v-model="drawer">

        <v-list nav>
            <v-list-item prepend-icon="mdi-account-circle" :title="data.user.name"></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list nav>
            <v-list-item prepend-icon="mdi-home" title="Home" to="/" nuxt></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav>
            <v-list-item prepend-icon="mdi-logout-variant" @click="signOut()" title="Cerrar sesión"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="1">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Nuxt3-Vuetify3-Prisma-Auth Boilerplate!</v-toolbar-title>
    </v-app-bar>
</template>