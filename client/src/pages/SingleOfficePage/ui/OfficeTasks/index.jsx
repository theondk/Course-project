import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { tasksSelector } from 'shared/store/slices/tasksSlice/selectors'
import { fetchTasks } from 'shared/store/slices/tasksSlice'
import { usersSelector } from 'shared/store/slices/usersSlice/selectors'
import { authSelector } from 'shared/store/slices/authSlice/selectors'
import TaskDelete from './ui/TaskDelete'
import TaskAddForm from './ui/TaskAddForm'
import TaskComplete from './ui/TaskComplete'
import FilterByCurrentUser from '../FilterByCurrentUser'

import styles from './styles.module.scss'

const OfficeTasks = () => {
	const { tasks } = useSelector(tasksSelector)
	const { users } = useSelector(usersSelector)
	const { userOfficeId, role } = useSelector(authSelector)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTasks())
	}, [])

	const content = (users.length !== 0) && <View users={users} tasks={tasks}/>

	return (
		<section className={styles.OfficeTasks}>
			<h2 className={styles.OfficeTasks__title}>Текущие задания</h2>
			{ role === 'Пользователь' && userOfficeId === Number(id) &&
				<FilterByCurrentUser />
			}
			{content}
			{ (userOfficeId === Number(id) && role === 'Управляющий') &&
				<TaskAddForm />
			}
		</section>
	)
}

const View = ({ tasks, users }) => {
	const [usd, setUsd] = useState(0)

	useEffect(() => {
		fetch('https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates')
			.then((data) => data.json())
			.then((data) => setUsd(data.rates[4].buyRate))
	}, [])

	const { role, userOfficeId, currentUserId } = useSelector(authSelector)
	const { id } = useParams()

	const officeUsers = users.map(item => {
		if (item.officeId === Number(id)) {
			return (item.id)
		}
	})

	const content = tasks.filter(item => officeUsers.includes(item.userId)).map(({ id: taskId, userId, name, description, price }) => {
		return (
			<li className={styles.OfficeTasks__item} key={taskId}>
				<p>Задание: {name}</p>
				<p>Описание: {description}</p>
				<p>Оплата: {price} BYN</p>
				<p>Оплата в USD: {usd && (price / usd).toFixed(2)} USD</p>
				<p>Пользователь: {users.filter(item => item.id === userId)[0].username}</p>
				{(userOfficeId === Number(id) && role === 'Управляющий') && <TaskDelete history={{ taskId, userId, name, description, price, state: 'Удалено' }} id={taskId} />}
				{userId === currentUserId && <TaskComplete history={{ taskId, userId, name, description, price, state: 'Завершено' }} id={taskId} />}
			</li>
		)
	})

	return (
		<>
			{content.length === 0 ? <h2 className={styles.OfficeTasks__subtitle}>Заданий на данный момент нету</h2> :
				<div className={styles.OfficeTasks__wrapper}>{content}</div>
			}
		</>
	)
}

export default OfficeTasks