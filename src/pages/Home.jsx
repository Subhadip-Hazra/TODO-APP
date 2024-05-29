import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Task from "../components/Task";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
        setCompletedTasks(savedTasks.filter(task => task.completed).length);
    }, []);

    const saveTasksToLocalStorage = (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const onAddTask = (title) => {
        if (title) {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
            setCompletedTasks(newTasks.filter(task => task.completed).length);
            saveTasksToLocalStorage(newTasks);
        }
    };

    const onToggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(newTasks);
        setCompletedTasks(newTasks.filter(task => task.completed).length);
        saveTasksToLocalStorage(newTasks);
    };

    const onDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
        setCompletedTasks(newTasks.filter(task => task.completed).length);
        saveTasksToLocalStorage(newTasks);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Header onAddTask={onAddTask} />
            <div className="flex justify-between items-center mt-20 w-full sm:max-w-4xl px-4">
                <p className="text-[#4EA8DE]">Created tasks<span className="text-[#D9D9D9] text-sm"> {tasks.length}</span></p>
                <p className="text-[#8284FA]">Completed <span className="bg-[#333333] rounded-2xl text-sm py-1 px-2 text-[#D9D9D9]"><span>{completedTasks}</span> from <span>{tasks.length}</span></span></p>
            </div>
            <div className="w-full sm:max-w-4xl mt-10 px-4">
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onToggleTask={() => onToggleTask(index)}
                        onDeleteTask={() => onDeleteTask(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
