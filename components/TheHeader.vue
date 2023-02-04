<template>
    <header class="py-2">
        <div class="mx auto container flex justify-between">
            <h1 class="font-bold">motodo.app</h1>
            <div class="flex gap-4">
              <BaseButton v-if="!user" is-small text="Login" />
              <BaseButton v-else is-small text="Logout" @click="client.auth.signOut()" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
</script>
