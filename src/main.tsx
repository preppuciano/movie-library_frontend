import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './styles/main.scss';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import AppLayout from './layouts/AppLayout';
import FavoritesPage from './pages/FavoritesPage';
import CreateMoviePage from './pages/CreateMoviePage';
import MoviesPage from './pages/MoviesPage';
import MoviesGenrePage from './pages/MoviesGenrePage';
import MoviesYearPage from './pages/MoviesYearPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path="page/:pageNumber" />
          </Route>
          <Route path="movies/genre/:genre" element={<MoviesGenrePage />}>
            <Route path="page/:pageNumber" />
          </Route>
          <Route path="movies/year/:year" element={<MoviesYearPage />}>
            <Route path="page/:pageNumber" />
          </Route>
          <Route path="movies/:movieId" element={<MoviePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="create-movie" element={<CreateMoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
