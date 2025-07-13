import React from 'react';

function NewTask({ data, index, onStatusChange }) {
    return ( 
         <div className='flex-shrink-0 h-full w-[350px] p-5 bg-[#349a69] rounded-xl '>
                <div className='text-xl flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>
                    {data.taskDescription}
                </p>
                <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs' onClick={() => onStatusChange(index, 'accept')}>Accept Task</button>
            </div>
            </div>
     );
}

export default NewTask;