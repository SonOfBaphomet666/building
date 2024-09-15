import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Technologies = () => {
  return (
    <>
      <div className="greyLine"></div>
      <div className="techno">
        <div className="techno__box">
          <h3>Технологии</h3>
          <div className="techno__info">
            <div className="techno__box">
              <p>
                ООО ФСК Мостоотряд-47 готово к решению широчайшего спектра
                задач, связанных со строительством, реконструкцией и капитальным
                ремонтом искусственных сооружений на сети железных и
                автомобильных дорог.
              </p>
            </div>
            <div className="techno__box">
              <p>
                География завершённых объектов простирается от западных границ
                России в Ивангороде до Уральского предгорья в Свердловской
                области и от Мурманских сопок до Ростовских степей.
              </p>
            </div>
            <div className="techno__box">
              <p>
                Внушительный парк строительной техники, вспомогательных машин,
                механизмов, СВСиУ, мостовых инвентарных конструкций, понтонов и
                опалубки позволяет в сжатые сроки проводить любые работы – от
                разработки котлована и погружения свай в основание моста до
                возведения опор и монтажа пролётных строений.
              </p>
            </div>
          </div>
          <div className="techno__photo">
            <img
              src="/src/assets/img/techno/tehnologii-1.jpg"
              className="photo"
            />
            <img
              src="/src/assets/img/techno/tehnologii-2.jpg"
              className="photo"
            />
            <img
              src="/src/assets/img/techno/tehnologii-3.jpg"
              className="photo"
            />
            <img
              src="/src/assets/img/techno/tehnologii-4.jpg"
              className="photo"
            />
            <img
              src="/src/assets/img/techno/tehnologii-5.jpg"
              className="photo"
            />
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

export default Technologies;
