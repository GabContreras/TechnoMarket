import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-404">
    <div className="error-icon">📦</div>
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <p>La ruta que buscas no existe en TecnoMarket.</p>
    <Link to="/">
      Volver al inicio
    </Link>
  </div>
);

export default PageNotFound;