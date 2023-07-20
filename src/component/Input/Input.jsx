import s from './input.module.css'
import pencil from '../../img/pencil-svgrepo-com.svg'
import close from '../../img/icons8-крестик-78.png'
import { useState } from 'react'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addReminder } from '../../redux/Slice/reminderSlice'
import { nanoid } from '@reduxjs/toolkit'

const Input = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [data, setData] = useState()
    const [time, setTime] = useState()
    const [popup, setPopup] = useState(false)


    const closeClick = () => {
        setText('')
    }

    const handleClick = () => {
        dispatch(addReminder({
            id: nanoid(),
            text: text,
            data: data,
            time: time
        }))
        setText('')
        setPopup(true)
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
                        <input onChange={(e) => { setData(e.target.value) }} className={s.inputData} type="date" />
                    </div>
                    <div className={s.boxtime}>
                        <p className={s.titleInput}>Укажите время</p>
                        <input onChange={(e) => { setTime(e.target.value) }} className={s.inputTime} type="time" />
                    </div>

                </div>
            }
            {text && <Button handleClick={handleClick} title={'Сохранить'} />}
            {
                popup &&
                <div className={s.popup}>
                    <div className={s.popupItem}>
                    Reminder created
                    </div>
                </div>
            }
        </div>
    )
}

export default Input