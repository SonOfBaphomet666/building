import { MdOutlineTimer } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import { PiGearSixBold } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import YouTube from "react-youtube";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box1">
          <div className="hero__line">
            <h2>ООО ФСК Меридиан Строительство и предоставление услуг</h2>
          </div>
          <img className="hero__img1" src="/src/assets/img/hero1.jpg" />
        </div>
      </section>
      <main>
        <div className="info">
          <div className="info__bigBox">
            <div className="info__boxInfo">
              <div className="info__smallBox">
                <div className="info__title">
                  <h3>О компании</h3>
                </div>
                <div className="info__box">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut quis ratione praesentium, molestias rerum voluptate sint
                    pariatur culpa nemo magni debitis illum dolor architecto
                    similique inventore, perferendis laudantium suscipit
                    explicabo?
                  </p>
                </div>
                <div className="info__box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quod, maxime odit esse debitis error. Fuga expedita
                    recusandae sapiente minima laudantium necessitatibus sunt!
                    Magnam animi tempore unde praesentium libero? Laborum?
                  </p>
                </div>
                <div className="info__box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium commodi officiis veniam consequuntur amet saepe,
                    soluta aut eum harum cupiditate labore vitae, ipsam sapiente
                    minus animi distinctio, unde nemo doloremque.
                  </p>
                </div>
                <div className="info__butt">
                  <button className="info__button">Технологии</button>
                </div>
              </div>
            </div>
          </div>

          <div className="info__state">
            <div className="info__colBox">
              <div className="info__iconBox">
                <PiGearSixBold className="icons" />
              </div>
              <div className="info__col">
                Технологии ООО ФСК Мостоотряд-47 выполняет собственными силами
                весь цикл работ, начиная с закладки фундамента до возведения
                пролетного строения.
              </div>
            </div>
            <div className="info__colBox">
              <div className="info__iconBox">
                <FaRegLightbulb className="icons" />
              </div>
              <div className="info__col">
                Производственные мощности Компания владеет большим парком
                современной строительной техники и специализированного
                оборудования как отечественного, так и иностранного производства
              </div>
            </div>
            <div className="info__colBox">
              <div className="info__iconBox">
                <IoIosPeople className="icons" />
              </div>
              <div className="info__col">
                Кадровый ресурс ООО ФСК Мостоотряд-47 – это в первую очередь,
                его рабочие, инженерно-технические работники и руководители
                среднего и высшего звена.
              </div>
            </div>
          </div>
          <div className="info__blueLine">
            <div className="info__blueBox">
              <MdOutlineTimer />
              <h3>27 лет</h3>
              <p>Опыта строительства и ремонта мостов</p>
            </div>
            <div className="info__blueBox2">
              <BiCheckCircle />
              <h3>150</h3>
              <p>Сданных объектов</p>
            </div>
          </div>
          <div className="info__object">
            <div className="info__objTitle">
              <h2>Наши объекты</h2>
            </div>
            <div className="info__paragraph">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores fuga magnam incidunt repellat earum odio, ipsam a
                quos tempore
              </p>
            </div>
          </div>
          <div className="info__img">
            <img className="info__image" src="/src/assets/img/bridge1.jpg" />
            <img className="info__image" src="/src/assets/img/bridge2.jpg" />
            <img className="info__image" src="/src/assets/img/bridge3.jpg" />
          </div>
          <div className="info__cert">
            <div className="info__certBox">
              <h2>Свидетельства и сертификаты</h2>
            </div>
            <div className="info__certParag">
              Согласно Федеральным законам от 1 декабря 2007г. №315-ФЗ и от 22
              июля 2008г. №148 - компания является членом саморегулируемой
              организации и имеет
            </div>
            <div className="info__certBox">
              <img
                className="info__certImg"
                src="/src/assets/img/sertificate1.jpg"
              />
              <img
                className="info__certImg"
                src="/src/assets/img/sertificate2.jpg"
              />
            </div>
          </div>
          <div className="info__brownLine">
            <div className="box">
            <div className="info__number">
              <p>Позвоните нам:</p>
              <p>8(499)777-77-77</p>
            </div>
            <div className="info__name">
              <h3>ФСК Мостоотряд-47</h3>
              <h3>АО ГК НПC</h3>
              </div>
              <div className="info__butt">
                <button className="info__blueButton">Контакты</button>
              </div>
            </div>
          </div>
          <div className="info__video">
            <YouTube
            className="info__video"
              videoId="QXzZF9wQphM"
            ></YouTube>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
