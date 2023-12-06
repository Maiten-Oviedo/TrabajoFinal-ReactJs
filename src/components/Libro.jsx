import '../stylesheets/Libro.css'
import { favoritos } from "./Favoritos";
import { libros } from './libros';

export function Libro( { id, name, icon, img} ) {

    const AgreagarAFavoritos = (e)=>{
        const libroAgreagado = libros.find(libro => libro.id === id);

        if (favoritos.some(libro=>libro.id === id)) {
            const libroIndex = favoritos.findIndex(libro=>libro.id === id);
            favoritos.splice(libroIndex, 1);
            e.target.classList.add('bi-heart');
            e.target.classList.remove('bi-heart-fill');
        }else{
            favoritos.push(libroAgreagado);
            e.target.classList.remove('bi-heart');
            e.target.classList.add('bi-heart-fill');
        }
        
        localStorage.setItem("libros-favoritos", JSON.stringify(favoritos));
    }
    return <div id={`libro ${id}`} className='libro-container'>
        <img 
        src={img} 
        alt={name}/>
        <p>{name} </p>
        <i 
        className={`fovorite-icon bi ${icon}`}
        onClick={AgreagarAFavoritos}
        ></i>
    </div>
}