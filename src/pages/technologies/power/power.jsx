import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Power = () => {
  return (
    <>
      <div className="greyLine" />
      <div className="power">
        <div className="power__box">
          <h3>Производственные мощи</h3>
          <div className="power__boxInfo">
            Компания владеет большим парком современной строительной техники и
            специализированного оборудования как отечественного, так и
            иностранного производства, который позволяет решать широкий круг
            задач как по реконструкции и ремонту действующих сооружений, так и
            строительству новых. Парк постоянно обновляется и расширяется.
          </div>
          <div className="power__photo">
            <div className="power__boxImgSmall">
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall1.jpg"
              />
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall2.jpg"
              />
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall3.jpg"
              />
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall4.jpg"
              />
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall5.jpg"
              />
              <img
                className="power__imgSmall"
                src="/src/assets/img/techno/powerSmall/powerSmall6.jpg"
              />
            </div>
            <div className="power__boxImg">
              <img
                className="power__img"
                src="/src/assets/img/techno/power/power1.jpg"
              />
              <img
                className="power__img"
                src="/src/assets/img/techno/power/power2.jpg"
              />
              <img
                className="power__img"
                src="/src/assets/img/techno/power/power3.jpg"
              />
              <img
                className="power__img"
                src="/src/assets/img/techno/power/power4.jpg"
              />
            </div>
            <div className="table">
              <div className="table__name">
                <h3>Буровая техника</h3>
              </div>
              <div className="table__name">
                <p>№</p> <p>Наименование Макс. Ø бурения/глубина бурения</p>{" "}
                <p>Кол-во</p>
              </div>
              <div className="table__name">
                <p>1</p>
                <p>Буровая установка Liebherr LB24</p>
                <p>1500мм/36м</p>
                <p>1</p>
              </div>
              <div className="table__name">
                <p>2</p>
                <p>Буровая установка Liebherr LRB255</p>
                <p>1500мм/44м</p>
                <p>1</p>
              </div>
              <div className="table__name">
                <p>3</p>
                <p>Буровая установка Liebherr LB28</p>
                <p>1500мм/44м</p>
                <p>1</p>
              </div>
              <div className="table__name">
                <p>4</p>
                <p>Буровая установка УРБ-2А-2 на шасси Урал 4320-0111-41</p>
                <p>190мм/300м</p>
                <p>1</p>
              </div>
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

export default Power;
