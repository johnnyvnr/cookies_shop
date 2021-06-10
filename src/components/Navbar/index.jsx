import React from 'react';
import { Nav, NavLink, Bars, NavIcon} from './NavbarElements'


const Navbar = ({toogle}) => {
    return ( 
        <>
            <Nav>
                <NavLink to='/'>
                    Cookies
                </NavLink>
                <NavIcon onClick={toogle}>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
     );
}
 
export default Navbar;