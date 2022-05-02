import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import TextInput from 'shared/ui/TextInput'
import CountryKezikService from 'shared/api/country'
import { fetchCountries } from 'shared/store/slices/countrySlice'

import styles from './styles.module.scss'

const CountryAddForm = () => {
	const modalRef = useRef([])
	const dispatch = useDispatch()

	const onToggleModal = () => {
		modalRef.current[0].style.display === 'block' ?
			(() => {
				modalRef.current[0].style.display = 'none'
				modalRef.current[1].style.display = 'none'
			})()
			:
			(() => {
				modalRef.current[0].style.display = 'block'
				modalRef.current[1].style.display = 'block'
			})()
	}

	return (
		<>
			<div ref={item => modalRef.current[1] = item} className="lock"></div>
			<div ref={item => modalRef.current[0] = item} className="modal">
				<div onClick={onToggleModal} className="cross">&#10006;</div>
				<Formik
					initialValues={{
						name: ''
					}}
					onSubmit={async (values) => {
						await CountryKezikService.addCountry(values)
						dispatch(fetchCountries())
						modalRef.current[0].style.display = 'none'
						modalRef.current[1].style.display = 'none'
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.required()
							.min(3)
							.max(20)
					})}
				>
					<Form>
						<h2 className="title">Добавление</h2>
						<TextInput className="form__input" label="Страна" name="name" id="name" placeholder="Страна (3-20 символов)"/>
						<button type="submit" className="form__btn">Добавить</button>
					</Form>
				</Formik>
			</div>
			
			<button type="button" onClick={onToggleModal} className={styles.CountryAddForm__add}>Добавить страну</button>
		</>
	)
}

export default CountryAddForm