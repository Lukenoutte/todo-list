import React, { useState, useRef, useEffect} from "react";
import "./styles.css";
import ItemToDo from "./components/item_to_do.js";
import apiConnection from "../../ApiConnection";

export default function App() {

  const inputToDo = useRef(false);
  const [count, setCount] = useState(0); 
  const [apiResponse, setApiResponse] = useState(false);

 

  const addToDo = (event) => {
    event.preventDefault();
    let newElement = inputToDo.current.value;

    if (newElement !== "") {
      apiConnection.postData(newElement);
    }
    inputToDo.current.value = "";
    setCount(count + 1);
  };



  const deleteToDo = (id) => {
    apiConnection.deleteData(id);
    setCount(count - 1);
  };
  

  useEffect( () => {
    async function getData() {
    const data = await apiConnection.getData();
    setApiResponse(data);
    }    
    getData();
  }, [count]);

 

  const generateItens = () => {
    var itensToDo = [];
    for (let index = 0; index < apiResponse.length; index++) {
      itensToDo.push(
        <ItemToDo
          key={index}
          id={Object.values(apiResponse[index])[0]}
          deleteItemFunc={deleteToDo}
        >
          {Object.values(apiResponse[index])[1]}
        </ItemToDo>
      );
    }
    return itensToDo;
  };

  return (
    <div className="todo-container">
      <h1> Tarefas </h1>
      <div className="input-button-container">
        <input type="text" ref={inputToDo} />{" "}
        <button onClick={(e) => addToDo(e)}>+</button>
      </div>
      {apiResponse !== false && (
        <div className="to-do-list">
          {apiResponse.length > 0 && generateItens()}
          {apiResponse.length === 0 && <h3>Nenhuma tarefa adicionada :(</h3>}
         
        </div>
      )}
      {apiResponse === false && <p>Loading...</p>}
    </div>
  );
}
