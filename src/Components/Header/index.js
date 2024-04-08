// import { Navbar, Nav, Container } from 'react-bootstrap';

import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Header = () =>{
    const [isClick,setClick] = useState(false)
    
    const onClickHandle = () =>{
        setClick((prevState) =>!prevState)
    }


    return(
        
        <nav className='navbar'>
            <div>
                <h1 className='logo'>Portfolio</h1>
            </div>
            <div >
                <ul id='list-item' className={isClick ? "#list-item active" : "#list-item"}>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Skills">Skills</NavLink></li>
                    <li><NavLink to="/Services">Services</NavLink></li>
                    <li><NavLink to="/Projects">Projects</NavLink></li>
                    <li><NavLink to="/Certificates">Certificates</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    
                </ul>
                
            </div>
            <div id="mobile" onClick={onClickHandle}>
                <i id="bar" className={isClick ? "fas fa-times" : "fas fa-bars"}></i>

            </div>
        </nav> 
       
    )

}
export default Header