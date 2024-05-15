function Conocimientos({img, texto}){
    return (
        <>
            <h2 className={texto.className} id={texto.id} >{texto.name}</h2>
            <img alt="img" className= "imgConocimientos" src={img}/>
        </>
        );
      }
      
    export default Conocimientos;
