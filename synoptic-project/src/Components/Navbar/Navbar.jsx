import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar" data-testid="nav-bar">
			<h1>First Holiday</h1>
			<ul className="links">
				<li>
					<Link to={'/'} data-testid="nav-bar-link">
						Home
					</Link>
				</li>
				<li>
					<Link to={'/About'} data-testid="nav-bar-link">
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
