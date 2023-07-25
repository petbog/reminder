import { useSelector } from 'react-redux'
import s from './ReminderList.module.css'
import { selectReminder } from '../../redux/Slice/reminderSlice'
import Reminder from '../Reminder/Reminder'


const ReminderList = () => {
    const { items } = useSelector(selectReminder)

    return (
        <div className="">
            {
              items.length ?  items.map((item) =>
                    <Reminder key={item.id} {...item} />
                ): <div className={s.noRemambers}>
                    Заметок пока нет 
                </div>
            }
        </div>
    )
}


export default ReminderList