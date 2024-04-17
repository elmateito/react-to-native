import React from "react";
import ReactDOM  from "react-dom";

const usuario = {
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

const container = document.getElementById('root')
ReactDOM.render(el, container)