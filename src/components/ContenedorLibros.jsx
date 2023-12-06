import { Libro } from './Libro';
import { favoritos } from './Favoritos';

export function ContenedorLibros( {libros} ) {
    localStorage.setItem("libros-favoritos", JSON.stringify(favoritos));
    let librosFavoritos = localStorage.getItem('libros-favoritos');
    librosFavoritos = JSON.parse(librosFavoritos);

    const isInFavorite = (id)=>{ 
        if(librosFavoritos.find(e=>e.id === id)){
            return false;
        } else {
            return true;
        }
    };

    return <>
        {libros.map((e) => (
            <Libro
            key={e.id}
            id={e.id}
            name={e.name}
            img={e.img}
            icon={isInFavorite(e.id) ? 'bi-heart' : 'bi-heart-fill'}
            />
        ))};
    </>
};
