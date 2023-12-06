import '../stylesheets/Menu.css';
import { InfoLibros } from "./InfoLibros";
import { useState } from 'react';


export function Menu() {
    const [eleccion, setEleccion] = useState(1);

    const efectButton1 = (e)=>{
        setEleccion(1);
        let boton2= document.querySelector('#button-2');
        boton2.classList.remove('activo');
        e.currentTarget.classList.add('activo');
    }

    const efectButton2 = (e)=>{
        setEleccion(2);
        let boton1= document.querySelector('#button-1');
        boton1.classList.remove('activo');
        e.currentTarget.classList.add('activo');
    }

    return<div className='menu'>
        <div className="menu-list">
            <button id='button-1' className='button-item activo' onClick={(e) => {efectButton1(e)}}>
                Todos los libros</button>
            <button id='button-2' className='button-item' onClick={(e) => {efectButton2(e)}}>
                Favoritos <i className='bi bi-heart-fill'></i></button>
            <i className="bi bi-search"></i>
        </div>
        
        <div className="todos-los-libros">
            <InfoLibros eleccion={eleccion}></InfoLibros>
        </div>
    </div>
}