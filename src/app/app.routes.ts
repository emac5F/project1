import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    // trabajando con RUTAS - carpeta pages
    {path: '', component: HomeComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:movieName', component: MovieDetailsComponent}, 
    {path: 'create', component: MovieFormPageComponent},
    // users
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent }, 
    { path: 'user-form', component: UserFormComponent },
];
