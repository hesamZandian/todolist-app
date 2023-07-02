import React from 'react';

function Loading() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex'>
        <div className='w-3 h-3 bg-gray-900 rounded-full animate-bounce mr-1' />
        <div className='w-3 h-3 bg-gray-900 rounded-full animate-bounce mr-1' />
        <div className='w-3 h-3 bg-gray-900 rounded-full animate-bounce' />
      </div>
    </div>
  );
}

export default Loading;
