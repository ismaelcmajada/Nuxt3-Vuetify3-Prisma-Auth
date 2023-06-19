<script setup>

const { toast, message, color, showToast } = useToast()

provide('toast', toast)
provide('message', message)
provide('color', color)
provide('showToast', showToast)
</script>

<template>
  <NuxtLayout>
    <v-snackbar v-model="toast" :color="color" :timeout="3000" location="bottom">
      {{ message }}
    </v-snackbar>
    <NuxtPage />
  </NuxtLayout>
</template>