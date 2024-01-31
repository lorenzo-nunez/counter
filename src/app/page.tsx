'use client'
import { useState } from 'react'
import './page.module.css'

function Counter() {
    let [count, setCount] = useState(0)

    return (
        <>
        <div className='card'>
            <button onClick={() => setCount((count) = count + 1)}>
                Count is {count}
            </button>
        </div>
        <div>
            <button onClick={() => setCount(0) }>Reset Count</button>
        </div>
        </>
    )
}

export default Counter