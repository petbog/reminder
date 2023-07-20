import s from './input.module.css'
import pencil from '../../img/pencil-svgrepo-com.svg'
import close from '../../img/icons8-крестик-78.png'
import { useState } from 'react'
import Button from '../Button/Button'

const Input = () => {
    const [text, setText] = useState('')

    const closeClick = () => {
        setText('')
    }

    return (
        <div className={s.input}>
            <div className={s.inputBox}>
                <img className={s.pencil} src={pencil} alt="pencil" />
                <input value={text} onChange={(e) => { setText(e.target.value) }} className={s.inputItem} type="text" />
                {
                    text && <img onClick={closeClick} className={s.inputClose} src={close} alt='close' />
                }
            </div>
            {
                text && <div className={s.data}>
                    <div className={s.boxData}>
                        <p className={s.titleInput}>Укажите дату</p>
                        <input className={s.inputData} type="date" />
                    </div>
                    <div className={s.boxtime}>
                        <p className={s.titleInput}>Укажите время</p>
                        <input className={s.inputTime} type="time" />
                    </div>

                </div>
            }
            {text && <Button title={'Сохранить'} />}
        </div>
    )
}

export default Input