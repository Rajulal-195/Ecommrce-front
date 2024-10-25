import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Headers() {
	const [modal, setmodal] = useState(false);
	return (
		<>
			<div className='headerfix'>

			<nav className="navbar navbar-expand-lg navbar-white bg-white">
				<div className="container-fluid">
					<img src="https://th.bing.com/th/id/OIP.OPu7-gGtg42-j0w6yekyGAHaBt?w=350&h=80&c=7&r=0&o=5&pid=1.7" alt="" />
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="material-symbols-rounded">
							filter_list
						</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="#">Categories</Link>
							</li>


							<li className="nav-item">
								<Link className="nav-link" to="#" >Luxe</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#" >Beauty Fashion</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#" >Beauty Advice</Link>
							</li>
						</ul> */}
						<form className=" mx-auto d-flex">
							<input className="form-control ps-3 px-5 w-100" type="search" placeholder="Search Fashion Product" aria-label="Search" />
							<button className='btn-btn  p-2 section-toggle rounded' onClick={() => setmodal(modal)}><span className="material-symbols-outlined"></span>Search
							</button>
						</form>
					</div>
				</div>
			</nav>

			</div>
		</>
	)
}

export default Headers