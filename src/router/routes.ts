import { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CountryListPage from '@/pages/CountryListPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

export const ROUTE_COUNTRY_LIST_NAME = 'country_list'

const routes: Readonly<Array<RouteRecordRaw>> = [
    {
        path: '/',
        name: 'Index',
        redirect: { name: ROUTE_COUNTRY_LIST_NAME },
        component: DefaultLayout,
        children: [
            {
                path: 'countries',
                name: ROUTE_COUNTRY_LIST_NAME,
                component: CountryListPage,
                meta: { isAuth: true }
            },
            {
                path: 'login',
                name: 'Login',
                component: LoginPage,
                meta: { isAuth: false }
            },
            {
                path: '404',
                name: 'Not Found',
                component: NotFoundPage
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        redirect: { name: 'Not Found' }
    }
]

export default routes
