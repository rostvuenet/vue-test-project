<template>
    <main class="app-main min-h-screen dark:bg-gradient-to-b from-gray-950 to-gray-900">
        <router-view v-slot="{ Component, route }">
            <transition
                name="scale"
                mode="out-in"
                appear
            >
                <component
                    :is="Component"
                    :key="route.path"
                />
            </transition>
        </router-view>
    </main>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'BlankLayout' })
</script>

<style lang="scss">
.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
