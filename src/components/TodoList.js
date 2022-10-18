import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

function TodoList({ toDos, setToDos }) {
  const setDeleteItem = (index) => {
    let temp = [...toDos];
    temp.splice(index, 1);

    setToDos(temp);
  };

  // 체크박스 클릭 시 done 처리
  const onChangeCheckbox = (event, index) => {
    let temp = [...toDos];
    temp[index].done = event.target.checked;

    setToDos(temp);
  };

  // 수정 클릭 시 readonly 처리
  const setIsReadOnly = (index) => {
    let temp = [...toDos];
    temp[index].readOnly = !temp[index].readOnly;

    setToDos(temp);
  };

  return (
    <ul>
      {toDos.map((item, index) => (
        <li key={index} className="listContainer">
          <input
            className="checkBox"
            type={"checkbox"}
            onChange={(event) => onChangeCheckbox(event, index)}
          />
          {/* done이 true면 클래스에 true가 추가되고,
          readonly가 false면 클래스에 list가 추가된다. */}
          {/* className = 'list done' */}
          <input
            className={`
            ${item.done ? "done" : ""}
            ${item.readOnly ? "list" : ""}
            `}
            style={{ flex: 0.8 }}
            value={item.text}
            defaultValue={item.text}
            readOnly={item.readOnly}
          />
          <div className="button" onClick={() => setIsReadOnly(index)}>
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div className="button" onClick={() => setDeleteItem(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
