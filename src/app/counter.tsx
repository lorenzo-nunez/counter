"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div className={styles.section}>
        <button
          className={styles.increment}
          onClick={() => setCount((count = count + 1))}
        >
          +
        </button>
        <button onClick={() => setCount(0)}>Reset Count</button>
        <button
          className={styles.decrement}
          onClick={() => setCount((count = count - 1))}
        >
          -
        </button>
      </div>
      <div className={styles.section}>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}
