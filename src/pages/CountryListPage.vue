<template>
    <div class="min-h-screen overflow-y-auto pt-16">
        <div
            class="w-full h-16 border-b border-gray-400 dark:border-gray-300 p-3 fixed top-0 inset-x-0 bg-white dark:bg-gray-950 z-10"
        >
            <div class="w-full flex justify-end items-center max-w-screen-2xl mx-auto">
                <div class="flex items-center gap-2 lg:gap-4">
                    <BaseButton @onClick="onLogout">
                        Logout
                    </BaseButton>
                </div>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto py-5 lg:py-10 px-3">
            <div class="country-list">
                <CountryCard
                    v-for="(country, cIndex) in countries"
                    :key="`country-${cIndex}`"
                    :country="country"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userLogout } from '@/composables/useAuthUser'
import RestCountriesService from '@/services/RestCountriesService'
import CountryCard from '@/components/Card/CountryCard.vue'
import BaseButton from '@/components/Button/BaseButton.vue'
import { ICountry } from '@/types'

//TODO: add color theme switcher

/* Data */
const loading = ref(false)
const countries = ref<Array<ICountry>>([])

/* Methods */
function onLogout () {
    userLogout()
}

function initCountryList () {
    loading.value = true
    RestCountriesService.getCountryListAll()
        .then((response) => {
            countries.value = [ ...response ].sort((a, b) => a.name.common.localeCompare(b.name.common))
        }).finally(() => {
            loading.value = false
        })
}

initCountryList()
</script>

<style lang="scss">
.country-list {
    @apply grid gap-4 lg:gap-5;
    grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
    grid-template-rows: auto auto auto;

    .country-card {
        display: grid;
        grid-template-rows: subgrid;
        gap: 0;
        grid-row: span 3;
    }
}
</style>
