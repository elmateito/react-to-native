import React from "react";
import MyImg from "../img/avatar.jpeg"
import "../components/styles/style.css"

class Comp extends React.Component{
    render(){
        const{nombre, edad, color} = this.props
        return (
        <div className="box">
            <div className="upper">
                <img src={MyImg} alt="yopitiyop" className="pipiolo"/>
            </div>
            <div>
                <p className="nameTitle">mi nombre es {nombre}</p>
                <p className="bodyTitle" style={{color:`${color}`}}>y soy {edad}</p>
            </div>
        </div>
        )
    }
} 

export default Comp;