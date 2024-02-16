import '../App.css'
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

const User_Profile_Section = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() === '') return;

        if (editIndex !== null) {
            // If in edit mode, update the task
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = inputValue;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            // Otherwise, add a new task
            setTasks([...tasks, inputValue]);
        }

        setInputValue('');
    };

    const handleEditTask = (index) => {
        setInputValue(tasks[index]);
        setEditIndex(index);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setEditIndex(null);
    };

    const handleDeleteAllTasks = () => {
        setTasks([]);
        setEditIndex(null);
    };

    return (
        <div className='Maincontainer'>
            <h1 className='text-4xl '>To-Do App</h1><br />
            <div className='text-white'>
                <Input
                    className='text-white'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter task"

                />
                <Button className='login_Btn' onClick={handleAddTask}>{editIndex !== null ? 'Save' : 'Add'}</Button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <Button onClick={() => handleEditTask(index)}>Edit</Button>
                        <Button onClick={() => handleDeleteTask(index)}>Delete</Button>
                    </li>
                ))}
            </ul>
            {tasks.length > 0 && (
                <Button onClick={handleDeleteAllTasks}>Delete All</Button>
            )}
        </div>
    );
};

export { User_Profile_Section };
