/* eslint-disable react/prop-types */
import { RiDeleteBinLine } from "react-icons/ri";
import TaskComplete from '../assets/check.svg';
import TaskIncomplete from '../assets/notCheck.svg';

const Task = ({ task, onToggleTask, onDeleteTask }) => {
    return (
        <div className="flex flex-col mt-2 bg-[#262626] rounded-md border-[#333333] box-shadow">
            <div className="w-full max-w-4xl flex justify-between items-center p-5">
                <img
                    src={task.completed ? TaskComplete : TaskIncomplete}
                    alt="task status"
                    className="w-[28px] cursor-pointer"
                    onClick={onToggleTask}
                />
                <p className={`flex-1 mx-4 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.title}
                </p>
                <RiDeleteBinLine className="text-[28px] cursor-pointer" onClick={onDeleteTask} />
            </div>
        </div>
    );
};

export default Task;
