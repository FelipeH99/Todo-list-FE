// Interfaces que coinciden con la API TodoList
export interface TodoList {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoItem {
  id: number;
  listId: number;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// DTOs para crear nuevos elementos
export interface CreateTodoListDto {
  name: string;
}

export interface CreateTodoItemDto {
  listId: number;
  description: string;
  completed?: boolean;
}

export interface UpdateTodoItemDto {
  description?: string;
  completed?: boolean;
} 