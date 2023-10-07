import { Link } from "react-router-dom";
import '../styles/Header.css'


export default function Header () {


    return (
        <header className="header_wrapper">
            <img></img>
            <nav className="nav_wrapper">
                <Link to='/' className="link">Home</Link>
                <Link to='/menu' className="link">Menu</Link>
            </nav>
        </header>
    )
}