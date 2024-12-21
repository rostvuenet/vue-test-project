import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { scrollBehavior } from '@/router/scroll'
import authMiddleware from '@/router/middleware/auth.middleware'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior,
    routes

})

authMiddleware(router)

export default router
