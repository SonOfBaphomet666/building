import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const FinishedObj = () => {
  return (
    <>
      <div className="greyLine" />
      <div className="Obj">
        <div className="Obj__cnt">
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>
                Строительство железнодорожной линии к Северному терминальному
                комплексу аэропорта Шереметьево
              </p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj1.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>
                Железнодорожного моста через реку Кола открытие сентябрь 2020
              </p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj2.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>Строительство путепроводной развязки Реутово – Балашиха.</p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj3.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
        </div>
        <div className="Obj__cnt">
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>
                Строительство железнодорожной линии к Северному терминальному
                комплексу аэропорта Шереметьево
              </p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj1.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>
                Железнодорожного моста через реку Кола открытие сентябрь 2020
              </p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj2.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
            </div>
          </div>
          <div className="Obj__box">
            <div className="Obj__boxTitle">
              <p>Строительство путепроводной развязки Реутово – Балашиха.</p>
            </div>
            <div className="Obj__completed">Завершен</div>
            <img src="/src/assets/img/obj/obj3.jpg" className="Obj__img" />
            <div className="Box__btn">
              <button className="details">Подробнее...</button>
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

export default FinishedObj;
