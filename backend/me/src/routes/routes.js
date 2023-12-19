import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const SignInSide = lazy(() => import('../pages/SignInSide'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));
const SignUpSide = lazy(()=> import('../pages/SignUpSide'));
const routes = {
    login: {
        path: '/',
        element: SignInSide 
    },

    signup:{
        path : '/signup',
        element : SignUpSide
    },

    main:{
        path : '/main',
        element : Home
    },

    emails: {
        path: '/main/emails',
        element: Emails
    },
    invalid: {
        path: '/main/*',
        element: Emails
    },
    view: {
        path: '/main/view',
        element: ViewEmail
    }
}

export { routes };