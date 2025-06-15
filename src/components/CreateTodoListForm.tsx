import React, { useState } from 'react';

interface CreateTodoListFormProps {
  onCreateList: (name: string) => void;
}

const CreateTodoListForm: React.FC<CreateTodoListFormProps> = ({ onCreateList }) => {
  const [listName, setListName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim() && !isCreating) {
      setIsCreating(true);
      try {
        await onCreateList(listName.trim());
        setListName('');
      } catch (error) {
        console.error('Error creating list:', error);
      } finally {
        setIsCreating(false);
      }
    }
  };

  return (
    <form className="create-list-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="Nombre de la nueva lista"
          className="create-list-input"
          disabled={isCreating}
        />
        <button 
          type="submit" 
          className="create-list-button"
          disabled={!listName.trim() || isCreating}
        >
          {isCreating ? '⏳' : '➕'} {isCreating ? 'Creando...' : 'Crear Lista'}
        </button>
      </div>
    </form>
  );
};

export default CreateTodoListForm; 