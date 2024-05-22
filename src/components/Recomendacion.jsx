function Recomendacion({img, texto}){
    return (
        <>
            <img alt="img" className= "comillas" src={img}/>
            <p className={texto.className} id={texto.id} >{texto.name}</p>
            
        </>
        );
      }
      
    export default Recomendacion;
