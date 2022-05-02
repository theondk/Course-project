import { Formik, Form } from 'formik'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import classnames from 'classnames/bind'

import TextInput from 'shared/ui/TextInput'
import { toggleAuth, rememberUser } from 'shared/store/slices/authSlice'
import KezikServices from 'shared/api'

import styles from '../styles.module.scss'

const SignIn = () => {
	const cn = classnames.bind(styles)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<Formik
			initialValues = {{
				username: '',
				password: ''
			}}
			onSubmit = {async (values) => {
				try {
					const resp = await KezikServices.login(values)
					if (resp !== false && resp.status !== 'Ожидание активации') {
						dispatch(toggleAuth(true))
						dispatch(rememberUser({ username: values.username, id: resp.id, role: resp.role, officeId: resp.officeId }))
						navigate('/offices')
					} else {
						resp.status === 'Ожидание активации' ? alert('Дождитесь пока администратор одобрит ваш запрос на регистрацию') : alert('Неверный логин или пароль')
					}
				} catch(e) {
					console.log(e)
				}
			}}
			validationSchema = {Yup.object({
				username: Yup.string()
					.required()
					.min(3),
				password: Yup.string()
					.required()
					.min(8)
					.max(16)
			})}
		>
			<Form className={styles.AuthPage}>
				<div className={styles.AuthPage__links}>
					<NavLink className={({ isActive }) => isActive ? cn(styles.AuthPage__link, 'active') : styles.AuthPage__link} to="/login">Вход</NavLink>
					<NavLink className={({ isActive }) => isActive ? cn(styles.AuthPage__link, 'active') : styles.AuthPage__link} to="/register">Регистрация</NavLink>
				</div>
				<div className="auth-form__inputs">
					<TextInput label="Имя пользователя" type="text" name="username" id="username" placeholder="Имя пользователя"/>
					<TextInput label="Пароль" type="password" name="password" id="password" placeholder="Пароль (8-16 символов)"/>
				</div>
				<div className="auth-form__btns">
					<button className={styles.AuthPage__btn} type="submit">Войти</button>
					<Link className={styles.AuthPage__recover} to="/recover">Забыли пароль?</Link>
				</div>
			</Form>
		</Formik>
	)
}

export default SignIn