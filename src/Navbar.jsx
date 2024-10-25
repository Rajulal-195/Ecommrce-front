import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
        <div className='headerfixs '>
            <nav className="navbar navbar-expand navbarx mt-4">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="material-symbols-rounded">
                            Search Item
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav center">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/Makeup">Makeup </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/Mans">Man</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Baby">Baby</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar