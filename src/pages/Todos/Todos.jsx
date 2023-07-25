import Header from '../../component/Header/Header'
import ReminderList from '../../component/ReminderList/ReminderList'
import s from './Todos.module.css'

const Todos = () => {
    return (
        <div className="">
            <Header />
            <div className={s.container}>
                <ReminderList />
            </div>
        </div>
    )
}

export default Todos