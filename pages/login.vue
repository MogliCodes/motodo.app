<template>
  <main class="pt-24">
    <div class="container mx-auto flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">Hi there!</h1>
      <p class="mb-8">Please login to use motodo.app</p>
      <BaseButton
        :is-large="true"
        text="Login with Google"
        @click="login('google')"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()

async function login(provider: 'github' | 'google' | 'gitlab' | 'bitbucket') {
  const { error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: '/',
    },
  })
  if (error) {
    return alert('Something went wrong !')
  }
}
</script>
