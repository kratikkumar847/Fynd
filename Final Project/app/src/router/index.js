import Router from 'vue-router';
import FrontPage from '../components/FrontPage.vue'
import ViewResult from '../components/ViewResult.vue'
import FacultyLogin from '../components/FacultyLogin.vue'
import FacultySignUp from '../components/FacultySignUp.vue'
import FacultyProfile from '../components/FacultyProfile.vue'

import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
        },
        {
           name: 'FacultyLogin',
           path: '/FacultyLogin',
           component: FacultyLogin
        },
        {
           name: 'FacultySignUp',
           path: '/FacultySignUp',
           component: FacultySignUp
        },
        {
           name: 'FacultyProfile',
           path: '/FacultyProfile',
           component: FacultyProfile,
           meta : {
            requiresAuth : true
           }
        }
    ]
});

router.beforeEach((to, from, next) => {
   const authenticatedUser = firebase.auth().currentUser;
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

   if(requiresAuth && !authenticatedUser) next('FacultyProfile')
   else next()
});

export default router;
