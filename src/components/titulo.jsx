function Titulo(texto){
    return (
        <h1 className={texto.className} id={texto.id} >{texto.name}</h1>
    )
}
export default Titulo;
