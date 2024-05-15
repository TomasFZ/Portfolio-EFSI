
import './App.css';
import Navbar from "./components/navbar.jsx";
import imagen from "./vendor/imagen1.png";
import imagen2 from "./vendor/imagen2.png";
import imagen5 from "./vendor/dibujosh2.png";
import imagen6 from "./vendor/eee.png";
import imagen3 from "./vendor/seBusca.png";
import imagen4 from "./vendor/placeHolder.png";
//import imagen from "./vendor/imagen.png"
//import imagen2 from "./vendor/imagen2.png"
//import imagen3 from "./vendor/imagen3.png"
//import imagen4 from "./vendor/imagen4.png"
import imagen7 from "./vendor/fotoPrueba.jpg";
import Titulo from "./components/titulo.jsx";
// https://platzi.com/blog/react-css/

function App() {
  
  return (
    <body>
      <div className="header">
    <Navbar imagen="Portfolio-EFSI/src/vendor/imagen1.png" className="navbar" name={imagen}></Navbar>
    </div>

    <div className="container">
      <div className="nombreIndex">
        <h1>Tomás FZ</h1>
      </div>
      <img alt="img" className="imgFondo"  src={imagen7}/>
    </div>
    {/* <img alt="img" className= "seBusca" src={imagen3}/> */}
    {/* <img alt="img" className= "placeHolder" src={imagen4}/> */}
    <Titulo name="Acerca de mí" className="titulo" id="acerca de mi"/>
    
    <p className="parrafo">El Museo Americano de Historia Natural (AMNH), ubicado en el Upper West Side de Manhattan, Nueva York, Estados Unidos, es uno de los museos más grandes y celebrados del mundo. Situado en un entorno similar a un parque, el museo consta de 25 edificios interconectados que albergan 46 salas de exposiciones permanentes, laboratorios de investigación y su renombrada biblioteca. Las colecciones contienen más de 150 millones de especímenes, de los cuales solo una pequeña fracción puede ser exhibida en un momento dado. El museo cuenta con un equipo científico de más de 200 personas y patrocina más de 100 expediciones especiales de campo cada año.</p>
    <p className="parrafo">El Museo Americano de Historia Natural (AMNH), ubicado en el Upper West Side de Manhattan, Nueva York, Estados Unidos, es uno de los museos más grandes y celebrados del mundo. Situado en un entorno similar a un parque, el museo consta de 25 edificios interconectados que albergan 46 salas de exposiciones permanentes, laboratorios de investigación y su renombrada biblioteca. Las colecciones contienen más de 150 millones de especímenes, de los cuales solo una pequeña fracción puede ser exhibida en un momento dado. El museo cuenta con un equipo científico de más de 200 personas y patrocina más de 100 expediciones especiales de campo cada año.</p>
    <p className="parrafo">El Museo Americano de Historia Natural (AMNH), ubicado en el Upper West Side de Manhattan, Nueva York, Estados Unidos, es uno de los museos más grandes y celebrados del mundo. Situado en un entorno similar a un parque, el museo consta de 25 edificios interconectados que albergan 46 salas de exposiciones permanentes, laboratorios de investigación y su renombrada biblioteca. Las colecciones contienen más de 150 millones de especímenes, de los cuales solo una pequeña fracción puede ser exhibida en un momento dado. El museo cuenta con un equipo científico de más de 200 personas y patrocina más de 100 expediciones especiales de campo cada año.</p>


    {/* <img alt="img" className="img2" src={imagen2}/> */}
    <Titulo id="conocimientos" name="Conocimientos" className="titulo"/>
    {/* <img alt="img" src={imagen2}/> */}
    {/* <img alt="img" src={imagen3}/> */}
    {/* <img alt="img" src={imagen4}/> */}


    <Titulo name="Experiencia" className="titulo" id="experiencia"/>


    <Titulo name="Educación" className="titulo" id="educacion"/>


    <Titulo name="Certificados" className="titulo" id="certificados"/>

    <Titulo name="Contacto" className="titulo" id="contacto"/>
    </body>
    
  );
}

export default App;
