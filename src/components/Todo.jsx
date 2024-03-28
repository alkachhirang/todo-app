import React, { useState } from 'react';
import Todoitem from './Todoitem';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className='min-h-screen bg-sky-300 flex justify-center items-center flex-col'>
            <div className='container max-w-[500px] mx-auto'>
                <h1 className='text-[50px] font-bold mb-[20px] text-center'>To-Do List</h1>
                <div className='flex gap-[12px] mb-[12px]'>
                    <input className='rounded-[5px] w-full outline-none p-[10px]'
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button className='bg-[#000] text-[#fff] px-[28px] py-[10px] rounded-[5px]' onClick={handleAddTodo}>Add</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <Todoitem todo={todo} onDelete={() => handleDeleteTodo(index)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
