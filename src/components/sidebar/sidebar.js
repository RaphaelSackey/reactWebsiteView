import './sidebar.css'
import { NavLink } from 'react-router-dom'


export default function Sidebar ({isClicked, toggleSidebar}){

    return(
        <div className='sidebar-wrapper'>
            <div className={isClicked? 'sidebar-active' : 'sidebar'}>
                <img src='./images/menu/x.png' className='x' onClick={toggleSidebar}></img>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home' onClick={toggleSidebar}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/about'onClick={toggleSidebar}>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/projects'onClick={toggleSidebar}>Projects</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='contact'onClick={toggleSidebar}>Contact</NavLink>
            </div>

        </div>
    )
}