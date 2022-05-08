import React, { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useHandleMoveToEdit } from '../hooks/handleMoveToEdit'
import { Words } from '../types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'

export type EditBtnProps = {
    readonly tId: string
}

export const EditBtn:VFC<EditBtnProps> = (props) => {
    const tId = props.tId
    const [words, setWords] = useRecoilState<Words[]>(WordsAtom)
    const { handleMoveToEdit } = useHandleMoveToEdit({words, tId})
  return (
    <div>
         <li
        className='
        flex items-center
        '
        >
            <button
                className='
                text-gray-400
                '
                onClick={handleMoveToEdit}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-300' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
            </button>
        </li>
    </div>
  )
}
