import Header from '../../component/Header/Header'
import Todo from '../../component/Todo/Todo'
import s from './Home.module.css'

const Home = () => {
    return (
        <div className="">
            <Header/>
            <div className={s.container}>
            <Todo/>
            </div>
        </div>

    )
}

export default Home