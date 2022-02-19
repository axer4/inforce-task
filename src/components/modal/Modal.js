import s from './Modal.module.css'
function Modal ({closeModal,onChange,addProduct}) {
    return  <div className={s.overlay}>
        <div className={s.modal}>
            <form type="submit" onSubmit={addProduct} className={s.form}>
                <label htmlFor='img'>Загрузите картинку</label>
                <input type='file' id='img' name='img'/>
                <label htmlFor="name">Название :</label>
                <input id="name" placeholder="Имя" name='name' onChange={onChange} required/>
                <label htmlFor="count">Количество :</label>
                <input id="count" placeholder="Число" name='count' onChange={onChange} required/>
                <label htmlFor="size">Размеры :</label>
                <input id="size" placeholder="Ширина" name='width' onChange={onChange} required/>
                <input id="size" placeholder="Высота" name='height' onChange={onChange} required/>
                <label htmlFor="weight">Вес :</label>
                <input id="weight" placeholder="Вес" name='weight' onChange={onChange} required/>
                <button type='submit' onSubmit={addProduct} className={s.button}>Добавить</button>
            </form>
            <button type='button' onClick={closeModal} className={s.button}>Закрыть окно</button>
        </div>
    </div> } 
export default Modal;