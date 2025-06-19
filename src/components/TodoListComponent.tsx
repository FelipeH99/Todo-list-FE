import React from 'react';
import { TodoList } from '../types';

interface TodoListComponentProps {
  todoList: TodoList;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const TodoListComponent: React.FC<TodoListComponentProps> = ({
  todoList,
  isSelected,
  onSelect,
  onDelete
}) => {
  return (
    <div 
      className={`todo-list-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="todo-list-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 className="todo-list-name">📋 {todoList.name}</h3>
        </div>
        <button
          className="delete-button"
          onClick={e => { e.stopPropagation(); onDelete(); }}
          title="Eliminar lista"
        >
          🗑️
        </button>
      </div>
      {isSelected && (
        <div className="selected-indicator">
          ✓
        </div>
      )}
    </div>
  );
};

export default TodoListComponent; 