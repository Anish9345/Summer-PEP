import { Routes } from '@angular/router';
import { Home } from './pages/home/home';                        // added home path . just type 'ho' after taht tab from suggesion in component . from this. this line will be automaticaly added.
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Userdetail } from './pages/userdetail/userdetail';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { authGuard } from './guard/auth-guard';
import { Movies } from './pages/movies/movies';
import { Formpage } from './pages/formpage/formpage';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path: "home",
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: "about",
        component: About,
        canActivate: [authGuard]
    },
    {
        path: "contact",
        component: Contact,
        canActivate: [authGuard]
    },
    {
        path: 'home/user/:userId',
        component: Userdetail,
        canActivate: [authGuard]
    },
    {
        path: 'movies',
        component: Movies,
        canActivate: [authGuard]
    },
    {
        path: 'form',
        component: Formpage,
        canActivate: [authGuard]
    }
];
