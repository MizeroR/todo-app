import { useState, useEffect } from "react";
import TodoItem from './TodoItem';

const Todo = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodos = [...todos, { text: newTodo, completed: false }];
            setTodos(newTodos);
            setNewTodo('');
        }
    };
    
    const toggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };
    
    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className="flex mb-5 border border-gray-300 rounded-xl overflow-hidden">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                    className="flex-1 px-3 py-2 outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <button 
                    onClick={handleAddTodo}
                    className="bg-blue-400 text-white px-2 py-0 text-lg font-bold rounded-full h-6 w-6 flex items-center justify-center hover:bg-blue-600 mx-1 my-2"
                >
                    +
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index}
                        todo={todo}
                        index={index}
                        onToggle={toggleComplete}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Todo