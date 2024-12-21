import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import { generateRandomString } from '@/helpers/string.helper'
import { ROUTE_COUNTRY_LIST_NAME } from '@/router/routes'
import router from '@/router'

const STORAGE_KEY = 'userStorage'


const user = useStorage(STORAGE_KEY, {
    userToken: ''
})

export const isAuthenticated = computed(() => {
    return !!user.value.userToken
})
export const setUserToken = (token: string) => {
    user.value.userToken = token
}
export const getUserToken = () => user.value.userToken

export function userLogin () {
    const token = generateRandomString(12)
    setUserToken(token)
    router.push({ name: ROUTE_COUNTRY_LIST_NAME })
}

export const userLogout = () => {
    setUserToken('')
    router.push({ name: 'Login' })
}
