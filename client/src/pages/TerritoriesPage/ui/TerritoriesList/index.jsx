import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTerritories } from 'slices/territoriesSlice'
import { pagesSelector } from 'slices/pagesSlice/selectors'
import { territoriesSelector } from 'slices/territoriesSlice/selectors'

import styles from './styles.module.scss'

const TerritoriesList = () => {
	const { territories } = useSelector(territoriesSelector)
	const { pagesCount, activePage, limit } = useSelector(pagesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTerritories([activePage - 1, limit]))
	}, [activePage])

	const territoriesList = (territories.length !== 0 && pagesCount) && <View territories={territories}/>

	return (
		<>
			{territoriesList}
		</>
	)
}

const View = ({territories}) => {
	const cards = territories.map(({id, name, address}) => {
		return (
			<Link tabIndex="0" to={`/territories/${id}`} key={id} className={styles.TerritoriesList__card}>
				<p>тип: {name}</p>
				<p>адрес: {address}</p>
			</Link>
		)
	})

	return (
		<div className={styles.TerritoriesList__wrapper}>
			{cards}
		</div>
	)
}

export default TerritoriesList