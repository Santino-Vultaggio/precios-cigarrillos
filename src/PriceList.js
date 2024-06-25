// PriceList.js

import React, { useState } from 'react';

const priceData = [
  { marca: 'Golden King click', precio: 13430 },
  { marca: 'Golden exclusive box', precio: 9500 },
  { marca: 'Golden rubio', precio: 8600 },
  { marca: 'Kiel ks', precio: 8560 },
  { marca: 'Kiel box', precio: 8310 },
  { marca: 'Master ks', precio: 10200 },
  { marca: 'Melbourne', precio: 9790 },
  { marca: 'Melbourne suave', precio: 9790 },
  { marca: 'Milenio Gold Box', precio: 11250 },
  { marca: 'Milenio Box', precio: 11250 },
  { marca: 'mileno click', precio: 13440 },
  { marca: 'Mill', precio: 8560 },
  { marca: 'Red point', precio: 11270 },
  { marca: 'Red point suave', precio: 11270 },
  { marca: 'Red point box', precio: 11270 },
  { marca: 'Red point mentolado', precio: 11270 },
  { marca: 'Red point x10', precio: 6170 },
  { marca: 'Red point ON', precio: 13600 },
];

const PriceList = () => {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('');

  const filteredData = priceData
    .filter((item) =>
      item.marca.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === 'marca') {
        return a.marca.localeCompare(b.marca);
      } else if (sortField === 'precio') {
        return a.precio - b.precio;
      }
      return 0;
    });

  return (
    <div className="price-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Filtrar por marca"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={() => setSortField('marca')}>Ordenar por Marca</button>
        <button onClick={() => setSortField('precio')}>Ordenar por Precio</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="header">Marca de Cigarrillo</th>
            <th className="header">Precio</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.marca}</td>
              <td>${item.precio.toLocaleString('es-AR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
