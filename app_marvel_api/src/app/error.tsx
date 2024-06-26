'use client'
import { FC } from 'react'

interface errorProps {
    error: Error
    reset: () => void
}

const error: FC<errorProps> = ({reset}) => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center h-screen'>
            <h2 className='text-3xl'>Algo deu errado :(</h2>
            <button onClick={() => reset()} className='btn btn-error'>Tente novamente</button>
        </div>
    )
}

export default error