import api from './api';
import { type Menu } from '../types/interfaces-types';

export const getMenu = async (): Promise<Menu[]> => {
  const response = await api.get('/menu');
  console.log(response.data)
  return response.data;
};