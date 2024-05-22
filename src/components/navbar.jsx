function Navbar({imagen}) {
    return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img alt="img" src={imagen.name}></img>
          Tomas FZ
        </div>
        <ul>
            <li><a href="#acerca de mi">Acerca de mí</a></li>
            <li><a href="#conocimientos">Conocimientos</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#educacion">Educación</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    );
  }
  
export default Navbar;
  