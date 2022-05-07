import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import TextInput from 'shared/ui/TextInput'
import KezikServices from 'shared/api'
import { pagesSelector } from 'shared/store/slices/pagesSlice/selectors'
import { fetchOffices } from 'shared/store/slices/officesSlice'
import SelectField from 'shared/ui/SelectField'
import { countrySelector } from 'shared/store/slices/countrySlice/selectors'

import styles from './styles.module.scss'

const OfficeUpdateForm = ({id}) => {
	const modalRef = useRef([])
	const { activePage, limit } = useSelector(pagesSelector)
	const { countries } = useSelector(countrySelector)
	const navigate = useNavigate()
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
						city: '',
						countryId: 0
					}}
					onSubmit={async (values) => {
						await KezikServices.updateOffice(id, { city: values.city }, values.countryId)
						modalRef.current[0].style.display = 'none'
						modalRef.current[1].style.display = 'none'
						dispatch(fetchOffices([activePage - 1, limit]))
						navigate('/offices')
					}}
					validationSchema={Yup.object({
						city: Yup.string()
							.required()
							.min(3)
							.max(20),
						countryId: Yup.number()
							.required()
					})}
				>
					<Form>
						<h2 className="title">Редактирование</h2>
						<TextInput className="form__input" label="Город" name="city" id="city" placeholder="Город (3-20 символов)" />
						<SelectField list={countries} label="Страна" name="countryId" id="countryId" />
						<button type="submit" className="form__btn">Отредактировать</button>
					</Form>
				</Formik>
			</div>
			<button onClick={onToggleModal} className={styles.TerritoryUpdateForm__update}>Обновить офис</button>
		</>
	)
}

export default OfficeUpdateForm