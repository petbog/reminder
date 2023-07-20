import s from './Header.module.css'
import lamp from '../../img/light-bulb-with-rays-shine-cartoon-style-flat-style-hand-drawn-style-doodle-style-symbol-of-creativity-innovation-inspiration-invention-and-idea-vector-illustration_175838-3305.avif'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img className={s.lamp}  src={lamp} alt="lamp" />
                <div className={s.title}>Reminder</div>
            </div>
        </div>
    )
}

export default Header