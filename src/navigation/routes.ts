import {RouteProps} from "react-router-dom";
import Login from 'screens/login/login.component';
import Register from 'screens/register/register.component';
import {Home} from 'screens/home/home.component';


type Routes = | 'HOME' | "LOGIN" | "REGISTER"

export interface AppRoutesType {
    route: RouteProps
}

export const AppRoutes: Record<Routes, RouteProps> = {
    HOME: {
        path: '/',
        component: Home
    },
    LOGIN: {
        path: '/login',
        component: Login
    },
    REGISTER: {
        path: '/register',
        component: Register
    }
}
