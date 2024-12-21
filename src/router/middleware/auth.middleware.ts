import { Router } from 'vue-router'
import { isAuthenticated } from '@/composables/useAuthUser'

export default function checkRouteParams (router: Router) {
    router.beforeEach((to, _, next) => {
        const isUserAuthenticated = isAuthenticated.value
        if (!isUserAuthenticated && to.name !== 'Login') {
            next({ name: 'Login' })
            return
        } else if (isUserAuthenticated && to.name === 'Login') {
            next({ name: 'Index' })
            return
        }
        next()
    })
}
