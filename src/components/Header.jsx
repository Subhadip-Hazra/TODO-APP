/* eslint-disable react/prop-types */
import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { CgAdd } from "react-icons/cg";

const Header = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    };

    return (
        <header className='w-full'>
            <div className='flex justify-center bg-[#0D0D0D] pt-16 pb-12'>
                <img src={Logo} alt="logo" />
            </div>
            <form onSubmit={handleSubmit} className='flex justify-center w-full items-center absolute top-36 gap-6 px-4'>
                <input
                    type='text'
                    placeholder='Add a new task'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='sm:w-1/2 w-full bg-[#262626] h-[52px] border border-[#0D0D0D] p-3 rounded-md box-shadow'
                />
                <button type="submit" className='w-[103px] h-[48px] rounded-md bg-[#1E6F9F] flex gap-1 items-center p-5 box-shadow'>
                    Create <CgAdd/>
                </button>
            </form>
        </header>
    );
};

export default Header;
