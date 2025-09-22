import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <main>
      <div className="notfound">
        <h1>404 - Contenido inexistente</h1>
        <p>La página que buscás no existe.</p>
        <a href="/">Volver al inicio</a>
      </div>
    </main>
  );
}

export default NotFound;