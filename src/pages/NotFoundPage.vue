<template>
    <div class="not-found-page h-full w-full flex justify-center items-center py-16">
        <div
            class="not-found-page__content"
        >
            <div class="mb-5 text-8xl">
                404
            </div>
            <div class="text-3xl">
                Page Not Found!
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.not-found-page {
    @apply text-center font-black text-red-400 dark:text-red-500 min-h-[60vh];
    text-shadow: -1px -1px 0px rgba(222, 38, 38, .5),
    1px 1px 0px rgba(217, 20, 20, .7);
}
</style>
