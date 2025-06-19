import axios from 'axios';
import {
  TodoList,
  TodoItem,
  CreateTodoListDto,
  CreateTodoItemDto,
  UpdateTodoItemDto,
} from '../types';

// Configuración base de Axios
const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio para TodoLists
export const todoListService = {
  // Obtener todas las listas
  async getAll(): Promise<TodoList[]> {
    const response = await api.get<TodoList[]>('/todolists');
    return response.data;
  },

  // Obtener una lista por ID
  async getById(id: number): Promise<TodoList> {
    const response = await api.get<TodoList>(`/todolists/${id}`);
    return response.data;
  },

  // Crear una nueva lista
  async create(createDto: CreateTodoListDto): Promise<TodoList> {
    const response = await api.post<TodoList>('/todolists', createDto);
    return response.data;
  },

  // Actualizar una lista
  async update(id: number, updateDto: Partial<CreateTodoListDto>): Promise<TodoList> {
    const response = await api.put<TodoList>(`/todolists/${id}`, updateDto);
    return response.data;
  },

  // Eliminar una lista
  async delete(id: number): Promise<void> {
    await api.delete(`/todolists/${id}`);
  },
};

// Servicio para TodoItems
export const todoItemService = {
  // Obtener todos los items de una lista específica
  async getByListId(listId: number): Promise<TodoItem[]> {
    const response = await api.get<TodoItem[]>(`/todolists/${listId}/items`);
    return response.data;
  },

  // Obtener un item específico
  async getById(id: number): Promise<TodoItem> {
    const response = await api.get<TodoItem>(`/items/${id}`);
    return response.data;
  },

  // Crear un nuevo item
  async create(createDto: CreateTodoItemDto): Promise<TodoItem> {
    const response = await api.post<TodoItem>(
      `/todolists/${createDto.listId}/items`,
      createDto
    );
    return response.data;
  },

  // Actualizar un item
  async update(id: number, updateDto: UpdateTodoItemDto): Promise<TodoItem> {
    const response = await api.put<TodoItem>(`/items/${id}`, updateDto);
    return response.data;
  },

  // Marcar como completado
  async complete(id: number): Promise<TodoItem> {
    const response = await api.patch<TodoItem>(`/items/${id}/complete`);
    return response.data;
  },

  // Eliminar un item
  async delete(id: number): Promise<void> {
    await api.delete(`/items/${id}`);
  },
};

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la API:', error);

    if (error.response?.status === 404) {
      throw new Error('Recurso no encontrado');
    } else if (error.response?.status === 500) {
      throw new Error('Error interno del servidor');
    } else if (error.code === 'ECONNREFUSED') {
      throw new Error(
        'No se puede conectar con el servidor. Asegúrate de que la API está ejecutándose en http://localhost:9000'
      );
    }

    throw error;
  }
);

export default api;