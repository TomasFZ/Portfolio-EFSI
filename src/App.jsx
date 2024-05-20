// App.jsx
import './App.css';
import Navbar from "./components/navbar.jsx";
import imagen from "./vendor/imagen1.png";
import imagen2 from "./vendor/imagen2.png";
import imagen5 from "./vendor/dibujosh2.png";
import imagen6 from "./vendor/eee.png";
import imagen3 from "./vendor/seBusca.png";
import imagen4 from "./vendor/placeHolder.png";
import imagen7 from "./vendor/fotoPrueba.jpg";
import imagen8 from "./vendor/m.jpg";
import imagen9 from "./vendor/ojoDePez.jpg";
import imagen10 from "./vendor/ojoDePez2.jpg";
import Titulo from "./components/titulo.jsx";
import Conocimientos from "./components/conocimientos.jsx";
import Texto from "./components/texto.jsx";
import MiniInfo from "./components/miniInfo.jsx";
import ExperienciaCard from "./components/experiencia.jsx";
// https://platzi.com/blog/react-css/

function extractInfo(text) {
  return text.split(': ')[1];
}

function App() {
  return (
    <div>
      <div className="header">
        <Navbar imagen="Portfolio-EFSI/src/vendor/imagen1.png" className="navbar" name={imagen}></Navbar>
      </div>

      <div className="container">
        <img alt="img" className="imgFondo" src={imagen9} />
        <div className="nombreIndex">
          <h1>Tomás FZ</h1>
        </div>
        {/* <h1 className="descripcion">Aspirante a muchas cosas</h1> */}
      </div>

      <img alt="img" className="seBusca" src={imagen3} />
      {/* <img alt="img" className= "placeHolder" src={imagen4}/> */}
      <Titulo name="Sobre mí" className="titulo" id="acerca de mi" /> {/* No sirve de nada el id aca */}

      <Texto name="El Museo Americano de Historia Natural (AMNH), ubicado en el Upper West Side de Manhattan, Nueva York, Estados Unidos, es uno de los museos más grandes y celebrados del mundo. Situado en un entorno similar a un parque, el museo consta de 25 edificios interconectados que albergan 46 salas de exposiciones permanentes, laboratorios de investigación y su renombrada biblioteca. Las colecciones contienen más de 150 millones de especímenes, de los cuales solo una pequeña fracción puede ser exhibida en un momento dado. El museo cuenta con un equipo científico de más de 200 personas y patrocina más de 100 expediciones especiales de campo cada año." className="parrafo" />
      
      <ul>
        <MiniInfo label="Edad" value="17 años" className="MiniInfo" />
        <MiniInfo label="Email" value="tomyfernandezabala@gmail.com" className="MiniInfo" />
      </ul>
      
      <Texto name="El Museo Americano de Historia Natural (AMNH), ubicado en el Upper West Side de Manhattan, Nueva York, Estados Unidos, es uno de los museos más grandes y celebrados del mundo." className="parrafo" />

      {/* <img alt="img" className="img2" src={imagen2}/> */}
      <Titulo id="conocimientos" name="Conocimientos" className="titulo" />
      <div className="conocimientosComp">
        <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "dibujo", name: "Dibujo" }} />
        <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "desarrollo mvc", name: "Desarrollo MVC" }} />
        <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "desarrollo web", name: "Desarrollo Web" }} />
        <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "base de datos", name: "Base de Datos" }} />
      </div>

      <Titulo name="Experiencia" className="titulo" id="experiencia" />

      <div className="card-group">
      <ExperienciaCard
        titulo="Desarrollador Web"
        imagen="url_de_la_imagen"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <ExperienciaCard
        titulo="Diseñador Gráfico"
        imagen="url_de_la_imagen"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      {/* Puedes repetir esto para agregar más experiencias laborales */}
    </div>


      <Titulo name="Educación" className="titulo" id="educacion" />
      <Titulo name="Certificaciones" className="titulo" id="certificados" />
      <Titulo name="Contacto" className="titulo" id="contacto" />
    </div>
  );
}

export default App;
