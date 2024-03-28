import React from 'react';

const Todoitem = ({ todo, onDelete }) => {
    return (
        <div className='flex gap-[12px]'>
            <p className='bg-[#fff] px-[20px] py-[10px] rounded-[5px] w-full  '>{todo}</p>
            <button className='bg-[#000] text-[#fff] px-[20px] py-[10px] rounded-[5px]' onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Todoitem;
