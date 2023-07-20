import { Link } from 'react-router-dom'
import Button from '../../component/Button/Button'
import Header from '../../component/Header/Header'
import s from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className="">
            <Header />
            <div className={s.title}>
                Такой страницы нет
            </div>
            <Link className={s.linkError} to='/'><Button title={'Назад'}/></Link>
        </div>
    )
}

export default ErrorPage