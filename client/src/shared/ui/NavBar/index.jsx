import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames/bind'
import { useDispatch } from 'react-redux'

import { toggleAuth } from 'slices/authSlice'
import { authSelector } from 'slices/authSlice/selectors'

import styles from './styles.module.scss'

const NavBar = () => {
	const cn = classnames.bind(styles)
	const { isAuth } = useSelector(authSelector)
	const dispatch = useDispatch()

	const logTabs = isAuth ?
		<>
			<NavLink 
				className={styles.NavBar__link}
				to="/owners"
				className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
			>
				Владельцы
			</NavLink>
			<NavLink 
				className="nav-link" 
				to="/territories"
				className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
			>
				Территории
			</NavLink>
			<div className={styles.NavBar__auth_wrapper}>
				<NavLink 
					to="/login"
					className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
					onClick={() => dispatch(toggleAuth(false))}
				>
					Выйти
				</NavLink>
			</div>
		</>
		:
		<div className={styles.NavBar__auth_wrapper}>
			{[['Войти', '/login'], ['Регистрация', '/register']].map(item => {
				return (
					<NavLink
						key={item}
						to={item[1]}
						className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
					>
						{item[0]}
					</NavLink>
				)
			})}
		</div>

	return (
		<Box sx={{position: 'relative', backgroundColor: 'rgba(0, 0, 100, .3)'}}>
			<nav className={styles.NavBar}>
				{logTabs}
			</nav>
		</Box>
	)
}

export default NavBar