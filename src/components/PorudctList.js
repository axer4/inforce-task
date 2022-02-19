import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import operations from "../redux/productsOperations";
import {modalMode} from '../redux/productsReducer.js';
import s from './ProductList.module.css'
function  ProductList ({dataFromState,isOpen}) {
 const [data,setData] = useState([]);
 const dispatch = useDispatch();
 useEffect(() => {
     setData(dataFromState)
 },[dataFromState])
 useEffect(() => {
     dispatch(operations.getProducts())
 },[])
 const toogleModal = () => {
     dispatch(modalMode(!isOpen))
 }

    return <div>
        <ul className={s.list}>
            {data.map(el => <li key={el.id} className={s.item}>
            <img src={el.imageUrl} alt='Картинка продкукта'/>
            <p className={s.name}>Название : {el.name}</p>
            <p>Ширина :{el.size.width}</p>
            <p>Высота :{el.size.height}</p>
            <p className={s.weight}>Вес : {el.weight}</p>
            <button type="button" className={s.button} onClick={() => dispatch(operations.onDelete(el.id))}>Delete</button>
            <button type='button' className={s.button} onClick={toogleModal}>Edit</button>
            </li>)}
        </ul>
    </div>
}
const mapStateToProps = state => {
    return {
     dataFromState: state.products.data,
     isOpen: state.products.isOpen,
    };
  };
  
  export default connect(mapStateToProps)(ProductList);
