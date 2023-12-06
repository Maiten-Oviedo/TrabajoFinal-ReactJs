import "../stylesheets/NavBar.css";

export function Navbar() {
  return<>
    <nav className="nav-container">
      <p>LIBROS</p>
      <ul>
        <li><a href="https:/github.com/Maiten-Oviedo" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
      </ul>
    </nav>
  </>
}