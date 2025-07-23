import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState(['work', 'sleep', 'eat', 'pray']);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
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
                    <li key={index} className="flex items-center">
                        <input type="checkbox" className="mr-2 h-4 w-4" />
                        <span>{todo}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo