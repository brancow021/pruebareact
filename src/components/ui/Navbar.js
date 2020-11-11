import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './styles'

export const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-20">
      <Link className="navbar-brand" to="/">CRUD</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Lista <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">Registro</Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}
