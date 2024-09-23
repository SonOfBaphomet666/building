// import Card from "../../components/card/card";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";

const Vacancies = () => {
  return (
    <>
      <div className="greyLine"></div>
      <div className="Box">
     
        <div className="Box__cards">
          <div className="Box__card">
            <div className="Box__title">
              <h3>Инженер</h3>
            </div>
            <div className="Box__par">
              Инженер(заработная плата 150 000 рублей, за 15 календарных дней)
            </div>
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Box__card">
            <div className="Box__title">
              <h3>Сварщик</h3>
            </div>
            <div className="Box__par">
              Сварщик(заработная плата 100 000 рублей, за 15 календарных дней)
            </div>
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Box__card">
            <div className="Box__title">
              <h3>Водитель</h3>
            </div>
            <div className="Box__par">
              Водитель(заработная плата 40 000 рублей, за 15 календарных дней)
            </div>
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Box__card">
            <div className="Box__title">
              <h3>Слесарь</h3>
            </div>
            <div className="Box__par">
              Слесарь(заработная плата 50 000 рублей, за 15 календарных дней)
            </div>
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
        </div>
        <div className="Box__info">
        <div className="Box__form">
        <div className="Box__blueBox">
            <h3 className="title">Отдел кадров</h3>
            <p className="par">
              <b>Телефон:</b>8(800)333-20-47 Бесплатный звонок - ответим на
              вопросы по вакансиям
            </p>
            <p className="par">
              <b>Телефон:</b> 8(985)441-02-67 WhatsApp - ответим на вопросы
              наших действующих сотрудников
            </p>
            <p className="par"> 
              <b>Email:</b>okinfo@m-47.ru
            </p>
          </div>
            <div className="Box__titl">
              <h4>Желание у нас работать,заполните анкету прямо сейчас!</h4>
            </div>
            <div className="Box__fields">
              <form className="Box__form">
                <label>
                  <input
                    className="Box__input"
                    type="text"
                    name="name"
                    placeholder="Полное имя *"
                  />
                </label>
              </form>
              <form className="Box__form">
                <label>
                  <input
                    className="Box__input"
                    type="text"
                    name="name"
                    placeholder="E-mail *"
                  />
                </label>
              </form>
              <form className="Box__form">
                <label>
                  <input
                    className="Box__input"
                    type="text"
                    name="name"
                    placeholder="Город *"
                  />
                </label>
              </form>
              <form className="Box__form">
                <label>
                  <input
                    className="Box__input"
                    type="text"
                    name="name"
                    placeholder="Телефон *"
                  />
                </label>
              </form>
              <form className="Box__form">
                <textarea
                  className="Box__text"
                  placeholder="Сообщение"
                ></textarea>
                <p>Оставшееся количество символов 500</p>
              </form>
              <button className="Box__btnSms">
                <SlEnvolopeLetter className="iconSms" />
                Отправить
              </button>
            </div>
         </div>
          </div>
      </div>
      <footer>
        <div className="info__blueLine2">
          <div className="box">
            <p className="info">
              <IoHome className="icon" />
              г. Москва, Михайлово-Ярцевское поселение,
              <br />
              пос. Шишкин Лес, дом 44, СТР. 1, ЭТ/КОМ 2/24
            </p>
            <p className="info">
              <FaPhone className="icon" />
              +7 (499) 917-15-20
            </p>
            <p className="info">
              <FaPhone className="icon" />
              Отдел кадров: +7 (499) 917-15-20 доб.12142,12143
              <br />
              <FaPhone className="icon" />
              +7 (985) 441-02-67 WhatsApp
            </p>
          </div>
          <div className="links">
            <p className="link">О компании</p>
            <p className="link">Технологии</p>
            <p className="link">Аренда техники</p>
            <p className="link">Вакансии</p>
            <p className="link">Контакты</p>
          </div>
          <div className="info__copyright">
            <p className="link">Copyright © 1996 - 2024. Мостоотряд 47.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Vacancies;
