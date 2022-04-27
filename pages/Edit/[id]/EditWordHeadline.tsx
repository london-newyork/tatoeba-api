import React from 'react'

export const EditWordHeadline = () => {
  return (
    <div className='flex justify-between pb-12'>
        <h1
        className="
        scss-underline
        text-2xl
        text-gray-700
        font-medium
        select-none">
            例えの編集
        </h1>
        <ul className='flex flex-row gap-4 items-center'>
        <li>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </button>
        </li>
        <li className='pr-2'>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 text-gray-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            </button>
        </li>
        </ul>
    </div>
  )
}