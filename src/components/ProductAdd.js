import { useState } from "react"
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import Modal from "./modal/Modal";
import operations from "../redux/productsOperations";
import {modalMode} from '../redux/productsReducer.js';
import s from './ProductAdd.module.css'
function ProductAdd ({isOpen}) {
    const [data,setData] = useState({});
    const dispatch = useDispatch();
    const onChangeInputHandler = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case 'name': setData({...data,name:value});
            break;
          case 'count': setData({...data,count:value});
            break;
            case 'width' : setData({...data,size:{...data.size,width:value}});
            break;
            case 'height': setData({...data,size:{...data.size,height:value}});
            break;
            case 'weight': setData({...data,weight:value})
            break;
            case 'img':setData({...data,imageUrl:value})
            break;
          default:return
        }
      }
      const addProduct = (e) => {
          e.preventDefault()
          const newData = data;
          dispatch(operations.addProduct(newData))
          dispatch(modalMode(!isOpen))
      }
      const toogleModal = () => {
        dispatch(modalMode(!isOpen))
      }
    return <div>
        <button type="button" onClick={toogleModal} className={s.button}>Add product</button>
        { isOpen &&
        <Modal 
                isOpen={isOpen}
                onChange = {onChangeInputHandler}
                addProduct = {addProduct}
                closeModal = {toogleModal}
        /> }
    </div>
}
const mapStateToProps = state => {
  return {
   isOpen: state.products.isOpen,
  };
};

export default connect(mapStateToProps)(ProductAdd);
