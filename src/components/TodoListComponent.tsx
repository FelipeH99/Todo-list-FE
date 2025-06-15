import React from 'react';
import { TodoList } from '../types';

interface TodoListComponentProps {
  todoList: TodoList;
  isSelected: boolean;
  onSelect: () => void;
}

const TodoListComponent: React.FC<TodoListComponentProps> = ({
  todoList,
  isSelected,
  onSelect
}) => {
  return (
    <div 
      className={`todo-list-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="todo-list-content">
        <h3 className="todo-list-name">📋 {todoList.name}</h3>
        <p className="todo-list-date">
          Creada: {new Date(todoList.createdAt).toLocaleDateString()}
        </p>
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