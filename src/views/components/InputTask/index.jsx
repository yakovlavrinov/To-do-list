import React, { useState, useLayoutEffect, useRef } from "react";

import styles from "./index.module.scss";

export const InputTask = ({ id, title, onDone, onRemove, onEdited }) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const editTiteleInputRef = useRef(null);
  useLayoutEffect(() => {
    if (isEditMode && editTiteleInputRef) {
      editTiteleInputRef.current.focus();
    }
  }, [isEditMode]);
  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(event) => {
            setChecked(event.target.checked);
            setTimeout(() => {
              onDone(id);
            }, 3000);
          }}
        />
        {isEditMode ? (
          <input
            value={value}
            ref={editTiteleInputRef}
            className={styles.inputTaskTitleEdit}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        ) : (
          <h3 className={styles.inputTaskTitle}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          onClick={() => {
            onEdited(id, value);
            setEditMode(false);
          }}
          aria-label="Save"
          className={styles.inputTaskSave}
        />
      ) : (
        <button
          onClick={() => {
            setEditMode(!isEditMode);
          }}
          aria-label="Edit"
          className={styles.inputTaskEdit}
        />
      )}

      <button
        onClick={() => {
          if (confirm("Are you sure?")) {
            onRemove(id);
          }
        }}
        aria-label="Remove"
        className={styles.inputTaskRemove}
      />
    </div>
  );
};

/* For Edit mode
<input
    className={styles.inputTaskTitleEdit}
/>

<button
    aria-label="Save"
    className={styles.inputTaskSave}
/>
*/
