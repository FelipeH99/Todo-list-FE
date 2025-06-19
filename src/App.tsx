import React, { useState, useEffect } from 'react'
import './App.css'
import { TodoList, TodoItem } from './types'
import { todoListService, todoItemService } from './services/api'
import TodoListComponent from './components/TodoListComponent'
import TodoItemComponent from './components/TodoItemComponent'
import CreateTodoListForm from './components/CreateTodoListForm'

function App() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([])
  const [selectedListId, setSelectedListId] = useState<number | null>(null)
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Cargar listas al iniciar
  useEffect(() => {
    loadTodoLists()
  }, [])

  // Cargar items cuando se selecciona una lista
  useEffect(() => {
    if (selectedListId) {
      loadTodoItems(selectedListId)
    }
  }, [selectedListId])

  const loadTodoLists = async () => {
    try {
      setLoading(true)
      const lists = await todoListService.getAll()
      setTodoLists(lists)
      setError(null)
    } catch (err) {
      setError('Error al cargar las listas')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const loadTodoItems = async (listId: number) => {
    try {
      const items = await todoItemService.getByListId(listId)
      setTodoItems(items)
    } catch (err) {
      setError('Error al cargar los items')
      console.error(err)
    }
  }

  const handleCreateList = async (name: string) => {
    try {
      await todoListService.create({ name })
      await loadTodoLists()
      setError(null)
    } catch (err) {
      setError('Error al crear la lista')
      console.error(err)
    }
  }

  const handleSelectList = (listId: number) => {
    setSelectedListId(listId)
  }

  const handleCreateItem = async (description: string) => {
    if (!selectedListId) return
    
    try {
      await todoItemService.create({
        listId: selectedListId,
        description,
        completed: false
      })
      await loadTodoItems(selectedListId)
      setError(null)
    } catch (err) {
      setError('Error al crear el item')
      console.error(err)
    }
  }

  const handleToggleItem = async (itemId: number, completed: boolean) => {
    try {
      await todoItemService.update(itemId, { completed })
      if (selectedListId) {
        await loadTodoItems(selectedListId)
      }
    } catch (err) {
      setError('Error al actualizar el item')
      console.error(err)
    }
  }

  const handleDeleteItem = async (itemId: number) => {
    try {
      await todoItemService.delete(itemId)
      if (selectedListId) {
        await loadTodoItems(selectedListId)
      }
    } catch (err) {
      setError('Error al eliminar el item')
      console.error(err)
    }
  }

  const handleDeleteList = async (listId: number) => {
    try {
      await todoListService.delete(listId);
      if (selectedListId === listId) {
        setSelectedListId(null);
      }
      await loadTodoLists();
      setError(null);
    } catch (err) {
      setError('Error al eliminar la lista');
      console.error(err);
    }
  };

  const selectedList = todoLists.find(list => list.id === selectedListId)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🗂️ TodoList Manager</h1>
        <p>Gestiona tus listas de tareas de forma eficiente</p>
      </header>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <div className="app-content">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h2>📋 Mis Listas</h2>
            <CreateTodoListForm onCreateList={handleCreateList} />
            
            {loading ? (
              <div className="loading">Cargando listas...</div>
            ) : (
              <div className="todo-lists">
                {todoLists.map(list => (
                  <TodoListComponent
                    key={list.id}
                    todoList={list}
                    isSelected={list.id === selectedListId}
                    onSelect={() => handleSelectList(list.id)}
                    onDelete={() => handleDeleteList(list.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </aside>

        <main className="main-content">
          {selectedList ? (
            <TodoItemComponent
              todoList={selectedList}
              todoItems={todoItems}
              onCreateItem={handleCreateItem}
              onToggleItem={handleToggleItem}
              onDeleteItem={handleDeleteItem}
            />
          ) : (
            <div className="welcome-message">
              <h2>👋 ¡Bienvenido!</h2>
              <p>Selecciona una lista de la barra lateral para comenzar</p>
              <p>O crea una nueva lista para empezar a organizar tus tareas</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App 