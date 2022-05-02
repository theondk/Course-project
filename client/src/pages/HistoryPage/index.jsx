import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { fetchHistory } from 'shared/store/slices/historySlice'
import { historySelector } from 'shared/store/slices/historySlice/selectors'
import DeleteFromHistory from './ui/DeleteFromHistory'
import RecoverFromHistory from './ui/RecoverFromHistory'

import styles from './styles.module.scss'

const HistoryPage = () => {
	const { history } = useSelector(historySelector)
	const dispatch = useDispatch()
	useEffect(async () => {
		dispatch(fetchHistory())
	}, [])

	const content = history.length !== 0 && <View history={history}/>
	
	return (
		<>
			<div className={styles.HistoryPage__bg}></div>
			<section className={styles.HistoryPage}>
				<div className="container">
					<h1 className={styles.HistoryPage__title}>История</h1>
					<ul className={styles.HistoryPage__items}>
						{content}
					</ul>
				</div>
			</section>
		</>
	)
}

const View = ({ history }) => {
	const content = history.map(({ id, name, description, state, price, userId }) => {
		return (
			<li key={id} className={styles.HistoryPage__item}>
				<p className={styles.HistoryPage__item_text}>Задание: {name}</p>
				<p className={styles.HistoryPage__item_text}>Описание: {description}</p>
				<p className={styles.HistoryPage__item_text}>Статус: {state}</p>
				<p className={styles.HistoryPage__item_text}>Оплата: {price} BYN</p>
				<p className={styles.HistoryPage__item_text}>Уникальный идентификатор пользователя: {userId}</p>
				<div className={styles.HistoryPage__item_btns}>
					<DeleteFromHistory id={id}/>
					<RecoverFromHistory id={id} price={price} description={description} name={name} userId={userId}/>
				</div>
			</li>
		)
	})

	return (
		<>
			{content}
		</>
	)
}

export default HistoryPage