import s from './Reminder.module.css'
import edit from '../../img/icons8-ручка-100.png'
import close from '../../img/icons8-крек-78.png'
import { useDispatch } from 'react-redux'
import { removeReminder } from '../../redux/Slice/reminderSlice'
import { useEffect, useState } from 'react'
import closeBlack from '../../img/icons8-крестик-78.png'


const Reminder = ({ text, data, time, id, handleText, newText, setNewText }) => {
    const [countdown, setCountdown] = useState('');
    const [popup, setPopup] = useState(false)


    useEffect(() => {
        const targetDate = new Date(`${data} ${time}`);
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setCountdown('Истек срок');
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setCountdown(
                    `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
                );
            }
        }, 20);

        return () => clearInterval(interval);
    }, [data, time]);

    const dispatch = useDispatch()

    const openPopup = () => {
        setPopup(true)
    }
    const newTextPoppup = (id) => {
        handleText(id)
        setPopup(false)
        setNewText('')
    }
    const deleteReminder = (id) => {
        dispatch(removeReminder(id))
    }
    const clearValuePoppup = () => {
        setNewText('')
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
                        {!isNaN(countdown.split(' ')[0]) ? <div className={s.lastTime}>{countdown}</div> : ''}
                    </div>
                    <div className="">
                        <img onClick={openPopup} className={s.edit} src={edit} alt="edit" />
                        <img onClick={() => deleteReminder(id)} className={s.close} src={close} alt="close" />
                        {
                            popup && <div className={s.poppupBox}>
                                <div className={s.title}>change reminder</div>
                                <div className={s.inputBox}>
                                    <input className={s.poppup} value={newText} type="text" onChange={(e) => { setNewText(e.target.value) }} />
                                    {
                                        newText && <img onClick={clearValuePoppup} src={closeBlack} alt="closeBlack" className={s.closeBlack} />
                                    }
                                </div>
                                <button onClick={() => newTextPoppup(id)} className={s.button}>change</button>
                            </div>
                        }

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Reminder