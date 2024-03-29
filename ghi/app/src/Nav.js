import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-fill w-100">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="create">Add a Sales Person</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="addcustomer">Add a Customer</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="customerlist">Customer List</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="salespeople">Sales People List</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="saleslist">Sales List</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="automobilelist">Automobile List</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="automobileform">Automobile Form</NavLink>
            </li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/manufacturers">Manufacturers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/manufacturers/create">Create a Manufacturer</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/models">Models</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/models/create">Create a Model</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technicians/create">Add a Technician</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/">Appointments</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/create">Create a Service Appointment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/appointments/history">Service History</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
