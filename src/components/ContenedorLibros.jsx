import { Libro } from './Libro';

export function ContenedorLibros( {libros} ) {
    let favoritos = localStorage.getItem('libros-favoritos');
    favoritos = JSON.parse(favoritos);

    const isInFavorite = (id)=>{ 
        if(favoritos.find(e=>e.id === id)){
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