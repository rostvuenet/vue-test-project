<template>
    <form
        class="space-y-6"
    >
        <div>
            <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900 dark:text-gray-300"
            >Email address</label>
            <div class="mt-2">
                <input
                    id="email"
                    v-model="formModel.userEmail"
                    type="email"
                    name="email"
                    autocomplete="email"
                    placeholder="admin@admin.com"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
                <label
                    for="password"
                    class="block text-sm/6 font-medium text-gray-900 dark:text-gray-300"
                >Password</label>
            </div>
            <div class="mt-2">
                <input
                    id="password"
                    v-model="formModel.userPassword"
                    type="password"
                    name="password"
                    placeholder="******"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
            </div>
        </div>

        <div>
            <BaseButton
                class="w-full"
                @onClick="onSubmit"
            >
                Sign in
            </BaseButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/Button/BaseButton.vue'

type TModelValue = {
    userEmail: string;
    userPassword: string;
}

/* Emits */
const emit = defineEmits<{
    (e: 'onSubmit', pl: TModelValue): void
}>()

/* Data */
const formModel = ref({
    userEmail: 'admin@admin.com',
    userPassword: ''
})

/* Methods */
function onSubmit () {
    if (formValidate()) {
        emit('onSubmit', { ...formModel.value })
        clearModel()
    } else {
        alert('Invalid credentials')
    }
}

function formValidate () {
    // using form validation is not necessary for testing
    return formModel.value.userEmail === 'admin@admin.com' && formModel.value.userPassword === 'admin'
}

function clearModel () {
    formModel.value = {
        userEmail: 'admin@admin.com',
        userPassword: ''
    }
}
</script>
