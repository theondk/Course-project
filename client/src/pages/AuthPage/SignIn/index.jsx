import { Formik, Form } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import classnames from 'classnames/bind'

import TextInput from 'shared/ui/TextInput'
import { toggleAuth, rememberUsername } from 'slices/authSlice'

import styles from '../styles.module.scss'
import KezikServices from 'shared/api'

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
					if (resp !== false) {
						dispatch(toggleAuth(true))
						dispatch(rememberUsername(values.username))
						navigate('/territories')
					} else {
						alert('Неверный логин или пароль')
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
				</div>
			</Form>
		</Formik>
	)
}

export default SignIn