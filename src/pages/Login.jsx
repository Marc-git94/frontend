function Login() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="text-center mb-4">Iniciar sesión</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="tu@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login