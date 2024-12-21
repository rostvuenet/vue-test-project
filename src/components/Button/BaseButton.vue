<template>
    <button
        :type="type"
        class="flex justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        type?: 'button' | 'submit' | 'reset'
    }>(), {
        type: 'button'
    })

const emit = defineEmits([ 'onClick' ])

const onClick = () => {
    emit('onClick')
}
</script>
