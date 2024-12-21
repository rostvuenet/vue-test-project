<template>
    <div class="flex items-center justify-center py-10 lg:py-20 px-3 lg:px-5">
        <div
            class="flex flex-col justify-center w-full px-6 py-12 lg:px-8 xl:px-10 border border-gray-400 dark:border-gray-300 rounded-md sm:max-w-sm"
        >
            <div class="sm:mx-auto w-full sm:max-w-sm">
                <img
                    class="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                >
                <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-gray-300">
                    Sign in
                </h2>
            </div>

            <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm
                    @onSubmit="onLoginFormSubmit"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/Form/LoginForm.vue'
import {userLogin} from '@/composables/useAuthUser'

function onLoginFormSubmit() {
    // just set random string to local storage and redirect to country list page
    userLogin()
}

</script>
