import React from "react";
import { useState } from "react";

import styles from "./index.module.scss";

export const InputPlus = ({ onAdd }) => {
  const [inputValue, setInputVelue] = useState("");
  return (
    <div className={styles.inputPlus}>
      <input
        value={inputValue}
        type="text"
        className={styles.inputPlusValue}
        placeholder="Type here..."
        onChange={(event) => {
          setInputVelue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onAdd(inputValue);
            setInputVelue("");
          }
        }}
      />
      <button
        onClick={() => {
          onAdd(inputValue);
          setInputVelue("");
        }}
        aria-label="Add"
        className={styles.inputPlusButton}
      />
    </div>
  );
};
