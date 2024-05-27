import React from 'react';

function Educacion(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
      </div>
    </div>
  );
}

export default Educacion;
