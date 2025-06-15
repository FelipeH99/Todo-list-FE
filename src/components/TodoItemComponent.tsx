import React, { useState } from 'react';
import { TodoList, TodoItem } from '../types';

interface TodoItemComponentProps {
  todoList: TodoList;
  todoItems: TodoItem[];
  onCreateItem: (description: string) => void;
  onToggleItem: (itemId: number, completed: boolean) => void;
  onDeleteItem: (itemId: number) => void;
}

const TodoItemComponent: React.FC<TodoItemComponentProps> = ({
  todoList,
  todoItems,
  onCreateItem,
  onToggleItem,
  onDeleteItem
}) => {
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemDescription.trim()) {
      onCreateItem(newItemDescription.trim());
      setNewItemDescription('');
    }
  };

  const completedItems = todoItems.filter(item => item.completed);
  const pendingItems = todoItems.filter(item => !item.completed);

  return (
    <div className="todo-items-container">
      <div className="todo-items-header">
        <h2>📝 {todoList.name}</h2>
        <div className="items-stats">
          <span className="stat pending">
            📌 {pendingItems.length} pendientes
          </span>
          <span className="stat completed">
            ✅ {completedItems.length} completadas
          </span>
        </div>
      </div>

      {/* Formulario para crear nuevo item */}
      <form className="create-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
          placeholder="Añadir nueva tarea..."
          className="create-item-input"
        />
        <button type="submit" className="create-item-button">
          ➕ Agregar
        </button>
      </form>

      {/* Lista de items pendientes */}
      {pendingItems.length > 0 && (
        <div className="items-section">
          <h3 className="section-title">📌 Tareas Pendientes</h3>
          <div className="items-list">
            {pendingItems.map(item => (
              <div key={item.id} className="todo-item pending">
                <div className="item-content">
                  <button
                    className="item-checkbox"
                    onClick={() => onToggleItem(item.id, true)}
                    title="Marcar como completada"
                  >
                    ⭕
                  </button>
                  <span className="item-description">{item.description}</span>
                </div>
                <div className="item-actions">
                  <span className="item-date">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteItem(item.id)}
                    title="Eliminar tarea"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lista de items completados */}
      {completedItems.length > 0 && (
        <div className="items-section">
          <h3 className="section-title">✅ Tareas Completadas</h3>
          <div className="items-list">
            {completedItems.map(item => (
              <div key={item.id} className="todo-item completed">
                <div className="item-content">
                  <button
                    className="item-checkbox checked"
                    onClick={() => onToggleItem(item.id, false)}
                    title="Marcar como pendiente"
                  >
                    ✅
                  </button>
                  <span className="item-description">{item.description}</span>
                </div>
                <div className="item-actions">
                  <span className="item-date">
                    {new Date(item.updatedAt).toLocaleDateString()}
                  </span>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteItem(item.id)}
                    title="Eliminar tarea"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Estado vacío */}
      {todoItems.length === 0 && (
        <div className="empty-state">
          <h3>📝 Lista vacía</h3>
          <p>¡Agrega tu primera tarea para comenzar!</p>
        </div>
      )}
    </div>
  );
};

export default TodoItemComponent; 