import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const styles = {
    container: {
      maxWidth: '450px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#fef6f9',
      borderRadius: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, sans-serif'
    },
    title: {
      color: '#b8a9c9',
      textAlign: 'center',
      marginBottom: '25px',
      fontSize: '2rem'
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '25px'
    },
    input: {
      flex: 1,
      padding: '12px 16px',
      border: '2px solid #e0d4e8',
      borderRadius: '12px',
      fontSize: '1rem',
      backgroundColor: '#fff',
      outline: 'none'
    },
    addButton: {
      padding: '12px 24px',
      backgroundColor: '#b8d4be',
      border: 'none',
      borderRadius: '12px',
      color: '#4a6b4f',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '2px solid #f0e6ef'
    },
    doneButton: {
      padding: '8px 14px',
      backgroundColor: '#c9e4de',
      border: 'none',
      borderRadius: '8px',
      color: '#4a7c6f',
      cursor: 'pointer',
      fontWeight: '500'
    },
    deleteButton: {
      padding: '8px 14px',
      backgroundColor: '#f8d7da',
      border: 'none',
      borderRadius: '8px',
      color: '#a94442',
      cursor: 'pointer',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>
      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.listItem}>
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#aaa' : '#6b5b7a'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleComplete(todo.id)} style={styles.doneButton}>
              {todo.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
