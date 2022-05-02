import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import classnames from 'classnames/bind'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import TextInput from 'shared/ui/TextInput'
import CheckboxInput from 'shared/ui/CheckboxInput'
import KezikServices from 'shared/api'

import styles from '../styles.module.scss'

const SignUp = () => {
	const cn = classnames.bind(styles)
	const navigate = useNavigate()

	return (
		<Formik
			initialValues = {{
				username: '',
				password: '',
				confirm_password: '',
				phrase: '',
				confirm_policy: false
			}}
			onSubmit = {async (values) => {
				try {
					const resp = await KezikServices.register(values)
					if (resp !== false) {
						alert('Поздравляем! Теперь войдите в аккаунт!')
						navigate('/login')
					} else {
						alert('Пользователь с таким имеем уже существует... Придумайте другое...')
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
					.max(16),
				confirm_password: Yup.string()
					.required()
					.oneOf([Yup.ref('password'), null]),
				phrase: Yup.string()
					.required()
					.min(4)
					.max(20),
				confirm_policy: Yup.boolean()
					.oneOf([true])
			})}
		>
			<Form className={styles.AuthPage}>
				<div className={styles.AuthPage__links}>
					<NavLink className={({ isActive }) => isActive ? cn(styles.AuthPage__link, 'active') : styles.AuthPage__link} to="/login">Вход</NavLink>
					<NavLink className={({ isActive }) => isActive ? cn(styles.AuthPage__link, 'active') : styles.AuthPage__link} to="/register">Регистрация</NavLink>
				</div>
				<div className="auth-form__inputs">
					<TextInput label="Имя пользователя" name="username" id="username" placeholder="Имя пользователя"/>
					<TextInput label="Пароль" type="password" name="password" id="password" placeholder="Пароль (8-16 символов)"/>
					<TextInput label="Повторите пароль" type="password" name="confirm_password" id="confirm_password" placeholder="Повторите пароль"/>
					<TextInput label="Секретное слово/фраза для восстановления пароля" name="phrase" id="phrase" placeholder="Секретное слово/фраза" />
					<CheckboxInput label="При нажатии вы подтвеждаете, что разрешаете нам сохранить ваши личные данные, а так же подтверждаете их дальнейшую обработку и использование." name="confirm_policy" id="confirm_policy"/>
				</div>
				<div className="auth-form__btns">
					<button className={styles.AuthPage__btn} type="submit">Зарегистрироваться</button>
				</div>
			</Form>
		</Formik>
	)
}

export default SignUp