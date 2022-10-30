import Router from 'vue-router';
import FrontPage from '../components/FrontPage.vue'
import ViewResult from '../components/ViewResult.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
           name: 'FrontPage',
           path: '/',
           component:FrontPage 
       },
        {
           name: 'ViewResult',
           path: '/ViewResult',
           component: ViewResult
        }
    ]
});

export default router;
