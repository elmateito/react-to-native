import React from "react";
import ReactDOM  from "react-dom/client";
import Comp from "./components/comp";

const root = ReactDOM.createRoot(document.getElementById('root'))

/* const usuario = {
  name: 'matio',
  last: 'pipiolo',
  age: 38,
  avatar: 'https://avatars.githubusercontent.com/u/137311764?v=4'
}

function data(usuario){
  return usuario.name+' '+usuario.last
}

const el = (
  <div>
    <h1>oli, soy {data(usuario)}, 
      y tengo {usuario.age} añitos</h1>
    <img src={usuario.avatar} alt="yop"/>
  </div>
)

root.render(el) */

root.render(<Comp 
  nombre='matio'
  edad='30'
  color='#7a1b0c'
/>)

/* const container = document.getElementById('root')
ReactDOM.render(el, container) */