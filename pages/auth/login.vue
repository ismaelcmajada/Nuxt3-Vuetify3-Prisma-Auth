<script setup>

const { signIn } = useAuth()
const showToast = inject('showToast')

definePageMeta({
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

const username = ref('')
const password = ref('')

const form = ref(false)
const rules = ref({
  required: value => !!value || 'Field is required',
})

const login = async (username, password) => {
  const response = await signIn('credentials', { redirect: false, username, password })

  if (response.error) {
    showToast(response.error, "error")
    return
  }

  await navigateTo(useRelativeCallbackUrl(useRoute()).value)
}
</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-hover v-slot="{ isHovering, props }">
      <v-card title="Sign in" theme="customDark" v-bind="props" :elevation="isHovering ? 24 : 6" rounded="xl" width="400"
        class="mx-auto pa-10">
        <v-form v-model="form" @submit.prevent="login(username, password)">
          <v-text-field v-model="username" label="Username" :rules="[rules.required]"></v-text-field>

          <v-text-field type="password" v-model="password" label="Password" :rules="[rules.required]"></v-text-field>

          <v-btn :disabled="!form" type="submit" color="primary" block class="mt-2">Sign In</v-btn>
        </v-form>
        <v-btn color="primary" block class="mt-2" to="/auth/register" nuxt>Create new account</v-btn>
      </v-card>
    </v-hover>
  </div>
</template>