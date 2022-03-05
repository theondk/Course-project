import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'

import TextInput from 'shared/ui/TextInput'
import KezikServices from 'shared/api'
import { pagesSelector } from 'slices/pagesSlice/selectors'
import { fetchTerritories } from 'slices/territoriesSlice'

import styles from './styles.module.scss'

const TerritoryAddForm = () => {
	const { activePage, limit } = useSelector(pagesSelector)
	const dispatch = useDispatch()

	const modalRef = useRef([])
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
						name: '',
						address: '',
						description: ''
					}}
					onSubmit={async (values) => {
						await KezikServices.addTerritory(values)
						modalRef.current[0].style.display = 'none'
						modalRef.current[1].style.display = 'none'
						dispatch(fetchTerritories([activePage - 1, limit]))
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.required()
							.min(3)
							.max(10),
						address: Yup.string()
							.required()
							.min(10)
							.max(30),
						description: Yup.string()
							.max(200)
					})}
				>
					<Form>
						<h2 className="title">Добавление</h2>
						<TextInput className="form__input" label="Тип" name="name" id="name" placeholder="Тип (3-10 символов)"/>
						<TextInput className="form__input" label="Адрес" name="address" id="address" placeholder="Адрес (10-30 символов)"/>
						<TextInput className="form__input" label="Описание" name="description" id="description" placeholder="Описание"/>
						<button type="submit" className="form__btn">Добавить</button>
					</Form>
				</Formik>
			</div>
			
			<button type="button" onClick={onToggleModal} className={styles.TerritoryAddForm__add}>Добавить территорию</button>
		</>
	)
}

export default TerritoryAddForm