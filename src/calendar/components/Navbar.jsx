

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mp-4 px-4">
        <span className="navbar-brand">
            <i className="fa-solid fa-calendar-days"></i>
            &nbsp;
            Fernando
        </span>

        <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>salir</span>
        </button>
    </div>
  )
}
