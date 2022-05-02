import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'

import UsersKezikService from 'shared/api/user'
import { officesSelector } from 'shared/store/slices/officesSlice/selectors'
import SelectField from 'shared/ui/SelectField'
import { fetchUsers } from 'shared/store/slices/usersSlice'

import styles from './styles.module.scss'

const UserActivate = ({ id }) => {
	const { offices } = useSelector(officesSelector)
	const dispatch = useDispatch()

	return (
		<Formik
			initialValues={{
				officeId: 0
			}}
			onSubmit={async (values) => {
				if (values.officeId !== 0) {
					await UsersKezikService.userActivate(id, values.officeId)
					dispatch(fetchUsers())
				} else {
					alert('Выберите офис для нового пользователя')
				}
			}}
			validationSchema={Yup.object({
				officeId: Yup.number()
					.required()
			})}
		>
			<Form>
				<SelectField list={offices} label="Офис" name="officeId" id="officeId" />
				<button type="submit" className={styles.UserActivate}>Одобрить</button>
			</Form>
		</Formik>
	)
}

export default UserActivate