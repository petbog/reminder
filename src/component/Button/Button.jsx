import s from './Button.module.css'

const Button = ({title,handleClick}) => {
    return (
        <div className={s.wrapper}>
            <button onClick={handleClick} className={s.btn}>{title}</button>
        </div>
    )
}


export default Button