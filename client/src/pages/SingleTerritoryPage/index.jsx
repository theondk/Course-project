import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTerritory } from 'slices/territoriesSlice'
import DeleteTerritory from './ui/DeleteTerritory'
import TerritoryUpdateForm from './ui/TerritoryUpdateForm'
import { territoriesSelector } from 'slices/territoriesSlice/selectors'

import styles from './styles.module.scss'

const SingleTerritoryPage = () => {
	const { id } = useParams()
	const { territory } = useSelector(territoriesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTerritory(id))
	}, [])

	const content = Object.keys(territory).length !== 0 && <View territory={territory}/>

	return (
		<section className={styles.SingleTerritoryPage}>
			<div className="container">
				<Link className="go-back-link" to="/territories">Назад</Link>
				{content}
			</div>
		</section>
	)
}

const View = ({territory: {name, address, description}}) => {
	const { id } = useParams()

	return (
		<div className={styles.SingleTerritoryPage__item}>
			<p className={styles.SingleTerritoryPage__descr}>Тип: {name}</p>
			<p className={styles.SingleTerritoryPage__descr}>Адрес: {address}</p>
			<p className={styles.SingleTerritoryPage__descr}>Описание: {description === '' ? 'Описание отсутствует' : description}</p>
			<div className={styles.SingleTerritoryPage__btns}>
				<TerritoryUpdateForm name={name} address={address} description={description} id={id}/>
				<DeleteTerritory id={id}/>
			</div>
		</div>
	)
}

export default SingleTerritoryPage