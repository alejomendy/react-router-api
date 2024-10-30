// src/Usuarios.js
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h1>Usuarios</h1>
      <ul className="list-group">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="list-group-item">
            {usuario.name} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
