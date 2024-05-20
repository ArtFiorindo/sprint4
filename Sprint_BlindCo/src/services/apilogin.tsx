import axios from 'axios';
import { User } from '@/app/types/types';

const api = axios.create({
  baseURL: 'http://localhost:4002',
});



export const loginUser = async (username: string, password: string): Promise<User | null> => {
  const response = await api.get<User[]>('/users', {
    params: { username, password }
  });
  const user = response.data.find(u => u.username === username && u.password === password);
  return user || null;
}
