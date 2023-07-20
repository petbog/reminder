import s from './Button.module.css'

const Button = ({title}) => {
    return (
        <div className={s.wrapper}>
            <button className={s.btn}>{title}</button>
        </div>
    )
}


export default Button