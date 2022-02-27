import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Pagination from '../../shared/Pagination'
import { fetchTerritories } from '../../../slices/territoriesSlice'
import TerritoryAddForm from '../TerritoryAddForm/TerritoryAddForm'

import './territoriesList.scss'

const TerritoriesList = () => {
    const limit = 6;
    const modalRef = useRef([]);
    const { territories } = useSelector(state => state.territories)
    const { pagesCount, activePage } = useSelector(state => state.pages)
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(fetchTerritories([activePage - 1, limit]))
    }, [activePage])

    const onToggleModal = () => {
        modalRef.current[0].style.display === 'block' ?
            (() => {
                modalRef.current[0].style.display = 'none';
                modalRef.current[1].style.display = 'none';
            })()
            :
            (() => {
                modalRef.current[0].style.display = 'block';
                modalRef.current[1].style.display = 'block';
            })()
    }
    
    const territoriesList = (territories.length !== 0 && pagesCount) && <View territories={territories}/>

    return (
        <>
            <div ref={item => modalRef.current[1] = item} className="lock"></div>
            <section className="territories">
                <div ref={item => modalRef.current[0] = item} className="modal">
                    <div onClick={onToggleModal} className="cross">&#10006;</div>
                    <TerritoryAddForm/>
                </div>
                <div className="container">
                    {territoriesList}
                    <button type="button" onClick={onToggleModal} className="territories__btn-add">Добавить территорию</button>
                </div>
                <Pagination/>
            </section>
        </>
    );
};

const View = ({territories}) => {
    const cards = territories.map(({id, name, address}) => {
        return (
            <Link tabIndex="0" to={`/territories/${id}`} key={id} className="territories__card">
                <p>тип: {name}</p>
                <p>адрес: {address}</p>
            </Link>
        )
    })
    
    return (
        <div className="territories__wrapper">
            {cards}
        </div>
    )
}

export default TerritoriesList;