import { useDispatch } from 'react-redux'

import { fetchHistory } from 'shared/store/slices/historySlice'
import HistoryKezikService from 'shared/api/history'

import styles from './styles.module.scss'

const DeleteFromHistory = ({ id }) => {
	const dispatch = useDispatch()

	const onDelete = async () => {
		await HistoryKezikService.deleteFromHistory(id)
		dispatch(fetchHistory())
	}

	return (
		<button onClick={onDelete} className={styles.DeleteFromHistory}>Удалить</button>
	)
}

export default DeleteFromHistory