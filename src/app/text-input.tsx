"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function TextInput() {
  let [text, setText] = useState("Enter text here...");

  return (
    <div className={styles.section}>
      <div className={styles.section}>
        <label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
      <div className={styles.section}>
        <p>Your text: {text}</p>
      </div>
    </div>
  );
}
