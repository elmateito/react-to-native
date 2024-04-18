import React from "react";
import MyImg from "../img/avatar.jpeg"
import "../components/styles/style.css"

class Comp extends React.Component{
    render(){
        const{nombre, edad, color} = this.props
        return (
        <div>
            <div className="upper">
                <h1>Componente</h1>
            </div>
            <div>
                <p style={{color:`${color}`}}>m pica el pn {nombre}, y tengo {edad} años</p>
                <img src={MyImg} alt="yopitiyop" className="pipiolo"/>
            </div>
        </div>
        )
    }
} 

export default Comp;