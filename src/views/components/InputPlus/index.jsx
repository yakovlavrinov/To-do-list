import React from "react";
import { useState, useCallback } from "react";

import styles from "./index.module.scss";

export const InputPlus = ({ onAdd }) => {
  const [inputValue, setInputVelue] = useState("");
  const onAddMemoized = useCallback(() => {
    onAdd(inputValue);
    setInputVelue("");
  }, [inputValue]);
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
            onAddMemoized();
          }
        }}
      />
      <button
        onClick={() => {
          onAddMemoized();
        }}
        aria-label="Add"
        className={styles.inputPlusButton}
      />
    </div>
  );
};
