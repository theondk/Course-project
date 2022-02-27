import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navBar.scss'

const NavBar = () => {
    const [isAuth, setIsAuth] = useState(true);

    const logTabs = isAuth ? 
        <Tab sx={{position: 'absolute', right: '10px'}} label="Выйти"/>
        :
        [['Войти', 1], ['Регистрация', 10]].map(item => {
            return (
                <Tab key={item} sx={{position: 'absolute', right: 10 * item[1] + 'px'}} label={item[0]}/>
            )
        })

    return (
        <Box sx={{backgroundColor: 'rgba(0, 0, 100, .3)'}}>
            <nav className="nav">
                <NavLink 
                    className="nav__link" 
                    to="/owners"
                    className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}
                >
                    Владельцы
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    to="/territories"
                    className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}
                >
                    Территории
                </NavLink>
                {/* {logTabs} */}
            </nav>
        </Box>
    );
}

export default NavBar;