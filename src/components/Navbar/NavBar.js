import React from 'react';
import { Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
        <>
            <nav className='nav-link'>
                <div>
                <Link  style={{ textDecoration: 'none' }} className='nav-link__logo' to='/'>
                    <h1>euroLEAGUE</h1>
                </Link>
                </div>
                <Link className='nav-link__menu' to='/home'>Home</Link>
                <Link className='nav-link__menu' to='/about'>About</Link>
                <Link className='nav-link__menu' to='/contact'>Contact</Link>
            </nav>
           
        </>
    );
};

export default NavBar;