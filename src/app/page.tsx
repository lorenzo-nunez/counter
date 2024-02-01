'use client'
import { useState } from 'react'
import styles from './page.module.css'

function Counter() {
    let [count, setCount] = useState(0)

    return (
        <>
        <div className={styles.container}>
            <div className={styles.card}>
                <button className={styles.increment} onClick={() => setCount((count) = count + 1)}>
                    +
                </button>
                <button onClick={() => setCount(0) }>
                    Reset Count
                </button>
                <button className={styles.decrement} onClick={() => setCount((count) = count - 1)}>
                    -
                </button>
            </div>
            
        </div>
        <div className={styles.countContainer}>
                <p>
                Count: {count}
                </p>
        </div>
            
       
        </>
    )
}

export default Counter