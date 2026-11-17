import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Mi Tienda</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Registro</Link>
          </div>
        </div>
      </nav>

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default App