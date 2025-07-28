const TodoItem = ({ todo, index, onToggle, onDelete }) => {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2 h-4 w-4" 
                    checked={todo.completed}
                    onChange={() => onToggle(index)}
                />
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-1"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 6v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6H3zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"/>
                </svg>
            </button>
        </li>
    );
};

export default TodoItem;