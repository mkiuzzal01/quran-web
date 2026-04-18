import { api } from '../lib/TApi';

export const getAllSurah = () =>
  api.get<any>(`/surah`, {
    tags: ['surah'],
    revalidate: 60,
  });

export const getSurahById = (id: string) =>
  api.get<any>(`/surah/${id}`, {
    tags: ['surah'],
    revalidate: 60,
  });


export const getAyahBySearch = (query: string) =>
  api.get<any>(`/search?q=${query}`, {
    tags: ['surah'],
    revalidate: 60,
  });
