import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constant";
import { FaLongArrowAltDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__number">
        <div className="header__info">
          <p className="header__title">Секритариат:</p>
          <p className="header__num">79999999</p>
          <p className="header__title">Отдел кадров:</p>
          <p className="header__num">79999999</p>
          <p className="header__title">WHATSAPP:</p>
          <p className="header__num">79999999</p>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar__box">
          <div className="navbar__title">
            <p>Строительная компания</p>
          </div>
          <div className="navbar__linksBox">
            <NavLink to={APP_ROUTES.HOME} className="navbar__link">
              Главная
            </NavLink>
            <NavLink className="navbar__link">
              <div className="dropdown">
                <button className="dropdown__btn">
                  Наши объекты <FaLongArrowAltDown className="arrow" />
                </button>
                <div className="dropdown__content">
                <NavLink to={APP_ROUTES.FINISHED}>Завершенные объекты</NavLink>
                <NavLink to={APP_ROUTES.PROCCESS}>В процессе строительства</NavLink>
                </div>
              </div>
            </NavLink>
            <NavLink to={APP_ROUTES.TECHNO} className="navbar__link">
              <div className="dropdown">
                <button className="dropdown__btn">
                  Технологии <FaLongArrowAltDown className="arrow" />
                </button>
                <div className="dropdown__content">
                  <NavLink to={APP_ROUTES.POWER}>Производственные мощи</NavLink>
                </div>
              </div>
            </NavLink>
            <NavLink to={APP_ROUTES.VACANCIES} className="navbar__link">
              Вакансии
            </NavLink>
            <NavLink to={APP_ROUTES.CONTACT} className="navbar__link">
              Контакты
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
