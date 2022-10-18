import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TodoInsert({ onSubmit, onChange, toDo }) {
  return (
    <form className="TodoInsertContainer" onSubmit={onSubmit}>
      <input
        className="InsertInput"
        onChange={onChange}
        value={toDo.text}
        defaultValue={toDo.text}
        type="text"
        placeholder="Write your to do "
      />
      <button className="PlusButton">
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <hr />
    </form>
  );
}

export default TodoInsert;
