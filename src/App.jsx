import { useState } from "react";
import Tareas from "./Tarea.jsx";
import "./App.css";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [tipo, setTipo] = useState("");
  let listaTareas = [];

  const nuevaTarea = (e) => {
    e.preventDefault();
    console.log("el tipo es"+tipo);
    if (!input.trim()) return;
    setTareas([...tareas, { id: Date.now(), text: input }]);
    setInput("");
  };

  function eliminaTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <>
      <div className={"m-8 grid grid-cols-2 gap-1 justify-evenly"}>
        <div>
          <h1>Tasca</h1>
          <br></br>
          <form onSubmit={nuevaTarea}>
            <input
              type="text"
              className={"w-96 rounded-lg border-solid border-2 border-sky-500"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br></br>
            <br></br>
            <button
              type="submit"
              className={
                "w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
            >
              Envia
            </button>
            <select>
              <option value={"1"} onChange={(e) => setTipo(e.target.value)}>TRABAJO</option>
              <option value={"2"} onChange={(e) => setTipo(e.target.value)}>PERSONAL</option>
              <option value={"3"} onChange={(e) => setTipo(e.target.value)}>URGENTE</option>
              <option value={"4"} onChange={(e) => setTipo(e.target.value)}>FAMILIA</option>
            </select>
          </form>
        </div>
        <div>
          <p>Tasques</p>
          {tareas.map((tarea) => (
            <Tareas id={tarea.id} text={tarea.text} delete={eliminaTarea} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
