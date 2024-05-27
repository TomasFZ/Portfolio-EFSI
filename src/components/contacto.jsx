import React from 'react';

function ContactCard() {
  return (
    <div className="card text-center">
      <div className="card-body-contact">
        <h5 className="card-title">Contacto</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="3"
              style={{ resize: 'none' }}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
