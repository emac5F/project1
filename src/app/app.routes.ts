import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';

export const routes: Routes = [
    // trabajando con RUTAS - carpeta pages
    {path: '', component: HomeComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'create', component: MovieFormPageComponent}
];
