// DEMO
import React, { useEffect, useState } from 'react';
import '../styles/ProductoEstilos.css'; 
const Productos = () => {
  const [productos, setProductos] = useState([]);

  // Cargar productos desde la API
  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <div className="productos-container">
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="productos-lista">
          {productos.map((producto) => (
            <div key={producto.id_producto} className="producto-card">
              <img
                src={producto.imagen_url}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-precio">${producto.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
