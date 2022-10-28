import { Link } from 'react-router-dom'
// styles
import './Navbar.css'

function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<Link to="/" className="brand">
					<h4>Welcome, Karthik.</h4>
				</Link>
				<Link to="/" className="nav-item">Tasks</Link>
				<Link to="/" className="nav-item">Drawings</Link>
				<Link to="/" className="nav-item">Analytics</Link>
			</nav>
		</div>
	)
}

export default Navbar