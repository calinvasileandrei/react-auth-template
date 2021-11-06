import {RouteProps} from 'react-router-dom';
import Login from 'screens/login/login.component';
import Register from 'screens/register/register.component';
import {Home} from 'screens/home/home.component';
import TestComponent from 'screens/test/test.component';


type Routes = | 'HOME' | "LOGIN" | "REGISTER" | 'TEST'

export interface AppRoutesType {
    route: RouteProps
}

export const AppRoutes: Record<Routes, RouteProps> = {
    HOME: {
        path: '/',
        component: Home
    },
    LOGIN: {
        path: '/login/:id',
        component: Login
    },
    REGISTER: {
        path: '/register',
        component: Register
    },
    TEST: {
        path: '/test',
        component: TestComponent
    }
}


export interface LoginRouteParams{
    id:string
}
