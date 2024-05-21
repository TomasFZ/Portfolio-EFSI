import React, { useState } from 'react';

function ContactCard() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambioNombre = (e) => {
    setNombre(e.target.value);
  };

  const manejarCambioCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const manejarCambioMensaje = (e) => {
    setMensaje(e.target.value);
  };

  const manejarEnvio = (e) => {
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Contacto</h5>
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={manejarCambioNombre}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={manejarCambioCorreo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="3"
              value={mensaje}
              onChange={manejarCambioMensaje}
              style={{ resize: 'none' }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
