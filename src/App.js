import React from "react";
import UseRef from "./components/useRef/useRef";
import Cleanup from "./components/UseEffect/Cleanup";
// import UseEffectApi from "./components/UseEffect/UseEffectApi";
import UseEffects from "./components/UseEffect/UseEffects";
import LoginForm from "./components/LoginForm";

import ShortCirEvolution from "./components/ShortCirEvolution";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import UseState from "./components/UsetState";
import { Link } from "react-router-dom";
import UseReducer from "./components/useReducer/useReducer";
function App() {

  return (
    <div>
    <div className="grid grid-cols-3 gap-8">
    <Link className="btn" to="/useffectapi">Useffect with Api</Link>
    <Link className="btn ml-2" to="/useContext">UseContext..</Link>
    <Link className="btn ml-2" to="/reactToastify">React Toastify</Link>
    <Link className="btn ml-2" to="/todoapp">Todo App</Link>
    <Link className="btn ml-2" to="/todoapplocal">TodoApp LocalStorage</Link>
    <Link className="btn ml-2" to="/filter">Filter Product</Link>
    </div>
    <UseState/>
    <UseStateArray/>
    <UseStateObject/>
    <ShortCirEvolution/>
    <LoginForm/>
    <UseEffects/>
    <Cleanup/>
    <UseRef/>
    <UseReducer/>
   </div>
  );
}

export default App;
