import s from './Header.module.css';
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <div className={s.nav}>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/users">Пользователи</Link>
          </div>
          <Link to="/"><img src="/images/avtotorgLogo.png" alt="logo" className={s.logo} /></Link>
          <div className={s.btns}>
            <button className={s.regBtn}>Регистрация</button>
            <button className='btn'>Вход</button>
          </div>
        </div>
      </div>
    </header>
  )
}