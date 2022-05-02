import { useDispatch } from 'react-redux'

import { fetchHistory } from 'shared/store/slices/historySlice'
import TasksKezikService from 'shared/api/tasks'
import HistoryKezikService from 'shared/api/history'

import styles from './styles.module.scss'

const RecoverFromHistory = ({id, name, description, userId, price}) => {
	const dispatch = useDispatch()
	
	const onRecover = async () => {
		await TasksKezikService.addTask({
			name,
			description,
			price,
			userId
		})
		await HistoryKezikService.deleteFromHistory(id)
		dispatch(fetchHistory())
	}

	return (
		<button onClick={onRecover} className={styles.RecoverFromHistory}>Восстановить</button>
	)
}

export default RecoverFromHistory