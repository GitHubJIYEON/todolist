import "./App.css";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList.js";
import { useState } from "react";

function App() {
  // 새로 추가할 todolist
  const [toDo, setToDo] = useState({});

  // 여태까지 추가되어있는 todolist
  const [toDos, setToDos] = useState([]);

  // 새로 추가하는 input 에 값이 변경되면 동작할 작업 => todo 상태에 저장
  const onChange = (event) => {
    console.log("onChange");
    console.log(event);
    console.log(event.target.value);
    setToDo({ text: event.target.value, done: false, readonly: true });
  };

  // '+'를 눌렀을 때 동작시킬 함수
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo.text === "") {
      return;
    }
    setToDos([...toDos, toDo]);
    setToDo({ text: "", done: false, readonly: true });
  };

  return (
    <div className="AppContainer">
      <div className="App">
        <div className="Nav">
          <h1>To do List</h1>
        </div>
        <div className="DateContainer">
          <div className="Date">
            10월18일
            <br />
            화요일
          </div>
        </div>
        <TodoInsert
          toDo={toDo}
          onChange={onChange}
          onSubmit={onSubmit}
        ></TodoInsert>
        <TodoList toDos={toDos} setToDos={setToDos}></TodoList>
      </div>
    </div>
  );
}
export default App;
