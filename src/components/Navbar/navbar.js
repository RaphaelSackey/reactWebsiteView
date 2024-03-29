import { NavLink, Link} from "react-router-dom";
import './navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({toggleSidebar}){


    return(
        <section className="top_nav container">
            <div id="logo"> <Link to= '/'>Raphael Sackey</Link></div>
    
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/projects">Projects</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/contact">Contact</NavLink></li> 
            </ul>   
            <img className = "burger" src="./images/menu/hamburger.png" onClick={toggleSidebar}></img> 
        
        </section>
    )

}