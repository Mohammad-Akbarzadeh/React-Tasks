import { useState } from "react";

export default function DynamicListManager() {

  let [todos, setTodos] = useState([]);

  function clickHandler() {
    let inputEl = document.getElementById("Todos");
    let newTodos = inputEl.value;
    setTodos([...todos, newTodos]);
    inputEl.value = "";
  }
  function removeHandler(index){
    let newTodos = todos.filter((_,i) => i !==index)
    setTodos(newTodos)
  }
  return (
    <div>
      <h2>Enter Your Todos</h2>

      <input type="text" id="Todos" placeholder="Enter your Todo.." />
      <button onClick={clickHandler}>Add</button>
      <button onClick={removeHandler}>Remove</button>

      <ul>
        {todos.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>
    </div>
  );
}

//   return(
//     <div>
//         <h1>Hello evreybody wellcome</h1>
//         {isLogin && <h1>your loged in</h1>}
//     </div>
//   )
//   return isLogin ? <h1>Wellcome</h1> : <h1>Please login to website</h1>;
// if(isLogin){
//     return <h1>Wellcome</h1>
// }
// return <h1>Please Login to website</h1>
