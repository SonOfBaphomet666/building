import Maps from "../../components/map/map";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="greyLine"></div>
      <div className="contact">
        <div className="contact__map">
          <div className="contact__title">
            <h3>Контакты ООО ФСК Мостоотряд-47</h3>
          </div>
          <Maps />
        </div>
        <div className="contact__number">
          <p>
            <b>Наименование организации:</b> Общество с ограниченной
            ответственностью ФСК «Мостоотряд-47» (ООО ФСК «Мостоотряд-47»)
          </p>
          <p>
            <b>ИНН / КПП: </b>
            7730153186 / 775101001
          </p>
          <p>
            <b>Телефон:</b> +7 (499) 917-15-20
          </p>
          <p>
            <b>Служба управления персоналом:</b>
          </p>
          <p>
            <b></b>+7 (499)917-15-20 (доб.12142 или 12143)
          </p>
          <p>
            <b>Whatsapp</b>+7 (985)441-02-67
          </p>
          <p>
            <b>По вопросам трудоустройства:</b>
          </p>
          <p>
            <b></b>8 (800) 333-20-47 БЕСПЛАТНЫЙ ЗВОНОК - ответим на вопросы по
            вакансиям, 8 (985) 961-33-45 Whatsapp
          </p>
          <p>
            <b>Расчётный отдел:</b> +7 (499)917-15-20 (доб.12112, 12118 или
            12192)
          </p>
          <p>
            <b>E-mail</b>fsk@m-47.ru
          </p>
        </div>
      </div>
      <div className="adress">
        <div className="adress__box">
          <div className="adress__infoBox">
            <div className="address__info">
              <p>
                <b>Юридический адрес:</b>
              </p>
              <p>
                108833, г. Москва, Михайлово-Ярцевское поселение,пос. Шишкин
                Лес, дом 44, строение 1, этаж 2, комната 24
              </p>
            </div>
            <div className="address__info">
              <p>
                <b>Фактический адрес (почтовый):</b>
              </p>
              <p>
                108833, г. Москва, пос. Михайлово-Ярцевское, п. Шишкин Лес, дом
                44
              </p>
            </div>
            <div className="address__info">
              <p>
                <b>Схема проезда:</b>
              </p>
              <p>
                Добраться из Москвы метро Теплый Стан маршрутка №512 до пос.
                Шишкин Лес (Первая автобусная остановка называется Рынок). Далее
                сзади за остановкой на расстоянии 200 метров база
                Мостоотряда-47.
              </p>
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
      {/* </div> */}
    </>
  );
};
export default Contact;
