import s from './Reminder.module.css'
import edit from '../../img/icons8-ручка-100.png'
import close from '../../img/icons8-крек-78.png'
import { useDispatch } from 'react-redux'
import { removeReminder } from '../../redux/Slice/reminderSlice'


const Reminder = ({ text, data, time, id }) => {
    const dispatch = useDispatch()

    const deleteReminder = (id) => {
        dispatch(removeReminder(id))
    }
    return (
        <div className={s.reminder}>
            <div className={s.box}>
                <div className={s.text}>
                    {text}
                </div>
                <div className={s.diteils}>
                    <div className={s.timeBox}>
                        {time && <div className={s.time}>{time}</div>}
                        {data && <div className={s.data}>{data}</div>}
                        <div className={s.lastTime}>56165165</div>
                    </div>
                    <div className="">
                        <img className={s.edit} src={edit} alt="edit" />
                        <img onClick={() => deleteReminder(id)} className={s.close} src={close} alt="close" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Reminder