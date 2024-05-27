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
import imagen8 from "./vendor/hangover.png";
import imagen9 from "./vendor/ojoDePez.jpg";
import imagen10 from "./vendor/gif1.gif";
import imagen11 from "./vendor/comillas.png";
import imagen12 from "./vendor/postgres.png";
import imagen13 from "./vendor/mvc.png";
import imagen14 from "./vendor/html5.png";
import imagen15 from "./vendor/Pablines.png";
import Titulo from "./components/titulo.jsx";
import Conocimientos from "./components/conocimientos.jsx";
import Texto from "./components/texto.jsx";
import MiniInfo from "./components/miniInfo.jsx";
import ExperienciaCard from "./components/experiencia.jsx";
import ContactCard from './components/contacto.jsx';
import Recomendacion from './components/Recomendacion.jsx';
import Educacion from './components/educacion.jsx';
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

      <img alt="img" className="seBusca" src={imagen10} />
      {/* <img alt="img" className= "placeHolder" src={imagen4}/> */}
      <Titulo name="Sobre mí" className="titulo" id="acerca de mi" /> {/* No sirve de nada el id aca */}

      <Texto name="Hola, soy Tomás. Me gusta mucho dibujar, programar y jugar el popular videojuego móvil Brawl Stars. Vivo en Argentina y voy al colegio ORT en Almagro. Las últimas vacaciones las pasé bien. No me gusta hacer tarea ni el café, pero sí me gusta descansar y leer cómics. Esta oración sólo está con el propósito de rellenar el texto y que no esté tan vacío. Cumplo el 29 de Julio y mis personajes ficticio favoritos son: 1. Rick Grimes, 2. Ben 10, 3. Spider-Man. 4. Man (aslume). Mi juguete más preciado es el Beyblade Galaxy Pegasus de Hasbro de la línea Metal Masters, junto con una figura de Lloyd Garmadon de Lego Ninjago. " className="parrafo" />
      
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
    <Conocimientos img={imagen13} texto={{ className: "conocimientosCompIndividual", id: "desarrollo mvc", name: "Desarrollo MVC" }} />
  </div>
  <div className="conocimiento">
    <Conocimientos img={imagen14} texto={{ className: "conocimientosCompIndividual", id: "desarrollo web", name: "Desarrollo Web" }} />
  </div>
  <div className="conocimiento">
    <Conocimientos img={imagen12} texto={{ className: "conocimientosCompIndividual", id: "base de datos", name: "Base de Datos" }} />
  </div>
</div>

      <Titulo name="Experiencia" className="titulo" id="experiencia" />
      <div class="container">
      <div className="card-group">
      <ExperienciaCard
        titulo="Desarrollador Web"
        imagen={imagen13}
        texto="Soy un desarrollador web full-stack full-time full-diamante full, muy pro como dicen."
      />
      <ExperienciaCard
        titulo="Diseñador Gráfico"
        imagen={imagen4}
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />

      <ExperienciaCard
        titulo="Presidente de Brawl Stars"
        imagen={imagen15}
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />

<ExperienciaCard
        titulo="Co-fundador de Hangover"
        imagen={imagen8}
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
      <Educacion
        titulo="Escuela San Cirano"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <Educacion
        titulo="Secundaria ORT Almagro"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
      />
      <Educacion
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
