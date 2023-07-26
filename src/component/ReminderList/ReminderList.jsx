import { useDispatch, useSelector } from 'react-redux'
import s from './ReminderList.module.css'
import {  newReminder, selectReminder } from '../../redux/Slice/reminderSlice'
import Reminder from '../Reminder/Reminder'
import { useState } from 'react'


const ReminderList = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(selectReminder)
    const [newText, setNewText] = useState('')

console.log(items)
    const handleText = (id) => {
        const updatedReminders = [...items].map((item) => {
            if (item.id === id) {
                return { ...item, text: newText }
            }
            return item 
        })
        dispatch(newReminder(updatedReminders))
    }

    return (
        <div className="">
            {
                items.length ? items.map((item) =>
                    <Reminder newText={newText} setNewText={setNewText} handleText={handleText} key={item.id} {...item} />
                ) : <div className={s.noRemambers}>
                    Заметок пока нет
                </div>
            }
        </div>
    )
}


export default ReminderList