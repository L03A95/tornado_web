import { Link } from "react-router-dom";
import '../styles/Header.css'
import tornado_logo from '../images/tornado_logo.png'

export default function Header () {


    return (
        <header className="header_wrapper">
            <img src={tornado_logo} className="header_img"/>
            <nav className="nav_wrapper">
                <Link to='/' className="link">Home</Link>
                <Link to='/menu' className="link">Menu</Link>
            </nav>
        </header>
    )
}