import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTerritory } from '../../../slices/territoriesSlice'

import './singleTerritoryPage.scss'
import KezikServices from '../../shared/api'

const SingleTerritoryPage = () => {
    const { id } = useParams()
    const { territory } = useSelector(state => state.territories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTerritory(id))
    }, [])

    const content = Object.keys(territory).length !== 0 && <View territory={territory}/>

    return (
        <section className="territory">
            <div className="container">
                <Link className="go-back-link" to="/territories">Назад</Link>
                {content}
            </div>
        </section>
    );
};

const View = ({territory: {name, address}}) => {
    const { id } = useParams()
    const onDelete = async () => {
        await KezikServices.deleteTerritory(id)
    }

    return (
        <div className="territory__item">
            <p className="territory__descr">Тип: {name}</p>
            <p className="territory__descr">Адрес: {address}</p>
            <p className="territory__descr">Описание:</p>
            <div className="territory__btns">
                <button className="territory__btns-add">Редактировать территорию</button>
                <button onClick={onDelete} className="territory__btns-delete">Удалить территорию</button>
            </div>
        </div>
    )
}

export default SingleTerritoryPage;