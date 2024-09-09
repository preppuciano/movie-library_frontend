import genres from '../config/genres.json';
import years from '../config/years.json';

export function getGenreValueuByGenreUrl(genreUrl?: string): number | undefined {
  const genre = genres.find((e) => e.url == genreUrl);
  return genre?.value;
}

export function getYearValueuByYearUrl(yearUrl?: string): number | undefined {
  const year = years.find((e) => e.url == yearUrl);
  return year?.value;
}

export function toKebabCase(text: string): string {
  // Convertir a minúsculas
  const lowerText = text.toLowerCase();

  // Remover tildes y caracteres especiales
  const noAccents = lowerText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  // Reemplazar espacios y caracteres no alfanuméricos por guiones
  const kebabCase = noAccents.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  return kebabCase;
}