<template>
    <div class="country-card">
        <div class="country-card__image">
            <img
                :src="countryImage"
                :alt="country.flag"
                class="object-cover aspect-video w-full h-auto"
            >
        </div>
        <div class="country-card__name">
            {{ country.name.common }}
        </div>
        <div class="country-card__info">
            <span>
                {{ country.region }}
            </span>
            <span>
                {{ capital }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ICountry } from '@/types'
import { computed } from 'vue'

interface IProps {
    country: ICountry
}

const props = defineProps<IProps>()

const countryImage = computed(() => {
    return props.country.flags.png
})
const capital = computed(() => {
    return props.country.capital[0] || ''
})
</script>

<style lang="scss">
.country-card {
    @apply relative rounded-md overflow-hidden border cursor-pointer border-gray-400 dark:border-gray-300 transition-all duration-300 bg-white dark:bg-gray-900;
    &__image {
        @apply flex justify-center select-none overflow-hidden p-2;
        img {
            @apply border border-gray-400 dark:border-gray-400 rounded-sm;
        }
    }

    &__name {
        @apply text-xl font-bold text-gray-900 dark:text-gray-300 p-2 border-b border-gray-400 dark:border-gray-300 content-center;
    }

    &__info {
        @apply text-sm text-gray-600 dark:text-gray-400 p-2 flex justify-between items-center flex-col sm:flex-row;
    }

    &:hover {
        @apply shadow-card-light dark:shadow-card-dark;
    }
}
</style>
