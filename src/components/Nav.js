import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css'

document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <a className="navbar-brand p-2" href="/home">Cinci Center</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to='/home'>Home</NavLink>
                    <NavLink className="nav-item nav-link" to='/about'>About</NavLink>
                    <NavLink className='nav-item nav-link' to='/attractions'>Attractions</NavLink>
                    <NavLink className="nav-item nav-link" to='/contact'>Contact</NavLink>
                    {/* <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Attractions
                        </button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/attractions">Fun</Link>
                            <Link className="dropdown-item" to="/attractions">History</Link>
                            <Link className="dropdown-item" to="/attractions">Food</Link>
                            <Link className="dropdown-item" to="/attractions">Drinks</Link>
                        </div>
                    </div> */}

                </div>
            </div>
        </nav>
    )
}

export default Nav