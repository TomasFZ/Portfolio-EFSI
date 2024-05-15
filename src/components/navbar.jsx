function Navbar({imagen}) {
    return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img alt="img" src={imagen.name}></img>
          Tomas FZ
        </div>
        <ul>
            <li><a href="default.asp">Acerca de mí</a></li>
            <li><a href="#conocimientos">Conocimientos</a></li>
            <li><a href="contact.asp">Experiencia</a></li>
            <li><a href="about.asp">Educación</a></li>
            <li><a href="about.asp">Certificaciones</a></li>
            <li><a href="about.asp">Contacto</a></li>
        </ul>
      </nav>
    </header>
       
    );
  }
  
export default Navbar;
  