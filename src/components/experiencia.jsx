import React from 'react';

function ExperienciaCard(props) {
  return (
    <div className="card">
      <img src={props.imagen} className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
      </div>
    </div>
  );
}

export default ExperienciaCard;
