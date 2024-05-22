function Conocimientos({img, texto}){
  return (
      <>
          <img alt="img" className= "imgConocimientos" src={img}/>
          <h2 className={texto.className} id={texto.id} >{texto.name}</h2>
      </>
  );
}

export default Conocimientos;
