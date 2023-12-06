import { ContenedorLibros } from "./ContenedorLibros";
import { libros } from "./libros";

export function InfoLibros( {eleccion} ) {
    let favoritos = localStorage.getItem('libros-favoritos');
    favoritos = JSON.parse(favoritos);
    return <>
    {
        <ContenedorLibros libros={eleccion === 1 ? libros : favoritos}/>
    }
    </>
}