import s from './Header.module.css'
import lamp from '../../img/light-bulb-with-rays-shine-cartoon-style-flat-style-hand-drawn-style-doodle-style-symbol-of-creativity-innovation-inspiration-invention-and-idea-vector-illustration_175838-3305.avif'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()


    return (
        <div className={s.header}>
            <div className={s.container}>
                <img className={s.lamp} src={lamp} alt="lamp" />
                <div className={s.titleBox}>
                    {
                        location.pathname === '/' ?
                            <Link className={s.linkTodo} to='todos'>
                                <div className={s.todos}>Reminder</div>
                            </Link> :
                            <Link className={s.linkTodo} to='/'>
                                <div className={s.todos}>Home</div>
                            </Link>
                    }
                </div>

            </div>
        </div>
    )
}

export default Header