
import './App.css';
import Navbar from "./components/navbar.jsx";
//import imagen from "./vendor/imagen.png"
//import imagen2 from "./vendor/imagen2.png"
//import imagen3 from "./vendor/imagen3.png"
//import imagen4 from "./vendor/imagen4.png"
import Titulo from "./components/titulo.jsx";
// https://platzi.com/blog/react-css/

function App() {
  
  return (
    <>
    <Navbar className="navbar"/>
    {/* <img alt="img" src={imagen}/> */}

    <div className="titulo"> 
    {/* funciona solo con el div, no con el classname en Titulo */}
      <Titulo name="Tomás FZ" className="titulo"/>
    </div>
    <p>Hola, soy Tomás. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto. Texto, texto, bla, bla, bla, y más texto.  </p>



    <div className="titulo"> 
    {/* funciona solo con el div, no con el classname en Titulo */}
      <Titulo name="Conocimientos" className="titulo"/>
    </div>
    {/* <img alt="img" src={imagen2}/> */}
    {/* <img alt="img" src={imagen3}/> */}
    {/* <img alt="img" src={imagen4}/> */}


    <Titulo name="Experiencia" className="titulo"/>


    <Titulo name="Educación" className="titulo"/>


    <Titulo name="Certificados" className="titulo"/>

    <Titulo name="Contacto" className="titulo"/>
    </>
    
  );
}

export default App;
