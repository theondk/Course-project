import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames/bind'
import { useDispatch } from 'react-redux'

import { toggleAuth } from 'shared/store/slices/authSlice'
import { authSelector } from 'shared/store/slices/authSlice/selectors'
import { routes } from 'shared/configs/routes'

import styles from './styles.module.scss'

const NavBar = () => {
	const cn = classnames.bind(styles)
	const { isAuth, role, userOfficeId } = useSelector(authSelector)
	const dispatch = useDispatch()

	const logTabs = isAuth ?
		<>
			<NavLink 
				className="nav-link" 
				to={routes.OFFICES}
				className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
			>
				Офисы
			</NavLink>
			{role === 'Администратор' &&
				<>
					<NavLink 
						className="nav-link" 
						to={routes.USERS}
						className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
					>
						Пользователи
					</NavLink>
					<NavLink
						className="nav-link"
						to={routes.HISTORY}
						className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
					>
						История
					</NavLink>
				</>
			}
			<div className={styles.NavBar__auth_wrapper}>
				{(role === 'Управляющий' || role === 'Пользователь') &&
					<NavLink
						to={`/offices/${userOfficeId}`}
						className={styles.NavBar__link}
					>
						Мой офис
					</NavLink>
				}
				<NavLink 
					to={routes.LOGIN}
					className={({ isActive }) => (isActive ? cn(styles.NavBar__link, 'active') : styles.NavBar__link)}
					onClick={() => dispatch(toggleAuth(false))}
				>
					Выйти
				</NavLink>
			</div>
		</>
		:
		<div className={styles.NavBar__auth_wrapper}>
			{[['Войти',routes.LOGIN], ['Регистрация', routes.REGISTER]].map(item => {
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