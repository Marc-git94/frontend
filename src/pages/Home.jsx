function Home() {
  // Datos de ejemplo (más adelante los sacarás de tu API de Node)
  const productos = [
    { id: 1, nombre: "Auriculares Bluetooth", precio: 49.99, imagen: "https://via.placeholder.com/300x200?text=Auriculares" },
    { id: 2, nombre: "Teclado Mecánico", precio: 89.99, imagen: "https://via.placeholder.com/300x200?text=Teclado" },
    { id: 3, nombre: "Monitor 27\"", precio: 199.99, imagen: "https://via.placeholder.com/300x200?text=Monitor" },
    { id: 4, nombre: "Ratón Gaming", precio: 35.50, imagen: "https://via.placeholder.com/300x200?text=Raton" },
  ]

  return (
    <div>
      <h1 className="mb-4">Productos destacados</h1>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text fw-bold text-primary">{producto.precio.toFixed(2)} €</p>
                <button className="btn btn-primary mt-auto">Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home