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
import imagen11 from "./vendor/comillas.png";
import Titulo from "./components/titulo.jsx";
import Conocimientos from "./components/conocimientos.jsx";
import Texto from "./components/texto.jsx";
import MiniInfo from "./components/miniInfo.jsx";
import ExperienciaCard from "./components/experiencia.jsx";
import ContactCard from './components/contacto.jsx';
import Recomendacion from './components/Recomendacion.jsx';
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
  <div className="conocimiento">
    <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "dibujo", name: "Dibujo" }} />
  </div>
  <div className="conocimiento">
    <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "desarrollo mvc", name: "Desarrollo MVC" }} />
  </div>
  <div className="conocimiento">
    <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "desarrollo web", name: "Desarrollo Web" }} />
  </div>
  <div className="conocimiento">
    <Conocimientos img={imagen3} texto={{ className: "conocimientosCompIndividual", id: "base de datos", name: "Base de Datos" }} />
  </div>
</div>

      <Titulo name="Experiencia" className="titulo" id="experiencia" />
      <div class="container">
      <div className="card-group">
      <ExperienciaCard
        titulo="Desarrollador Web"
        img={imagen3}
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <ExperienciaCard
        titulo="Diseñador Gráfico"
        imagen="url_de_la_imagen"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />

      <ExperienciaCard
        titulo="Presidente de Brawl Stars"
        imagen="url_de_la_imagen"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />

<ExperienciaCard
        titulo="Co-fundador de Hangover"
        imagen="url_de_la_imagen"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
    </div>
    </div>

 

    
    <Titulo name="Recomendaciones" className="titulo" />

    <div className="cardRecomendaciones">
        <div className="recomendacion-container">
          <Recomendacion img={imagen11} className="comillas" texto={{ className: "recomendacion", id: "1", name: "Es un gran alumno que se merece no tener que rendir ningún examen para ninguna materia. " }} />
        </div>
        <div className="recomendacion-container">
          <Recomendacion img={imagen11} className="comillas" texto={{ className: "recomendacion", id: "2", name: "Coincido con lo que dijo el de la izquierda. " }} />
        </div>
        <div className="recomendacion-container">
          <Recomendacion img={imagen11} className="comillas" texto={{ className: "recomendacion", id: "3", name: "Tomás fue muy didáctico y transmitió los contenidos de la cursada de una manera que se me hizo muy fácil de entender. Siempre estuvo a disposición para despejar dudas y fue realmente de ayuda en la resolución de los distintos ejercicios." }} />
        </div>
        <div className="recomendacion-container">
          <Recomendacion img={imagen11} className="comillas" texto={{ className: "recomendacion", id: "4", name: "Muchas veces me compartió los resumenes que hizo para las pruebas de Historia sin pedir nada a cambio." }} />
        </div>
      </div>

      <Titulo name="Educación" className="titulo" id="educacion" />

      <div className="card-group">
      <ExperienciaCard
        titulo="Escuela San Cirano"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <ExperienciaCard
        titulo="Secundaria ORT Almagro"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <ExperienciaCard
        titulo="California Institute of Arts"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
    </div>
      



      <Titulo name="Contacto" className="titulo" id="contacto" />
      <div className="card-group">
        <ContactCard />
      </div>



    </div>
  );
}

export default App;
