import { Formik, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useEffect } from 'react'

import TextInput from 'shared/ui/TextInput'
import SelectField from 'shared/ui/SelectField'
import { usersSelector } from 'shared/store/slices/usersSlice/selectors'
import TasksKezikService from 'shared/api/tasks'
import { fetchUsers } from 'shared/store/slices/usersSlice'
import { fetchTasks } from 'shared/store/slices/tasksSlice'

import styles from './styles.module.scss'

const TaskAddForm = () => {
	const { users } = useSelector(usersSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	return (
		<section className={styles.TaskAddForm}>
			<Formik
				initialValues={{
					name: '',
					description: '',
					userId: 0,
					price: 0
				}}
				onSubmit={async (values) => {
					console.log(values)
					if (values.userId !== 0) {
						await TasksKezikService.addTask(values)
						dispatch(fetchTasks())
					}
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.required()
						.min(3)
						.max(20),
					description: Yup.string()
						.required()
						.min(10)
						.max(100),
					userId: Yup.number()
						.required(),
					price: Yup.number()
						.required()
				})}
			>
				<Form>
					<h2 className="title">Добавление</h2>
					<TextInput className="form__input" label="Название" name="name" id="name" placeholder="Название (3-20 символов)" />
					<TextInput className="form__input" label="Описание" name="description" id="description" placeholder="Описание (10-100 символов)" />
					<TextInput className="form__input" label="Оплата" name="price" id="price" placeholder="Оплата (в BYN)" />
					<SelectField list={users.filter(({ role }) => role !== 'Администратор' && role !== 'Управляющий')} label="Пользователь" name="userId" id="userId" />
					<button type="submit" className="form__btn">Добавить</button>
				</Form>
			</Formik>
		</section>
	)
}

export default TaskAddForm