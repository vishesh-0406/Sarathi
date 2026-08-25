import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2>SARATHI</h2>

            <div className="nav-links">
                <a href="#home">Home</a>

                <a href="#companies">Companies</a>

                <a href="#preparation">Preparation</a>

                <a href="#resources">Resources</a>
            </div>
        </nav>
    );
}

export default Navbar;