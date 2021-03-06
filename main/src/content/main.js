import "../styles/main.css";
import logo from "../resources/logo.png";
import axios from 'axios'
import React, { useEffect, useState } from 'react';


const baseURL = "http://localhost:8080/pupil/2";


function Main() {
  const [pupil, setPupil] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPupil(response.data)
    });
  }, [])

  if (!pupil) return null;



  document.title = "Админ панель — myliss";
  return (
    <div className="container__wrapper">
      <div className="container__padding">
        <div className="logo__container">
          <img src={logo} className="logo__img" />
          <div className="logo__text">Админ панель</div>
          
          <div className="container__exit">
            <a href="#" className="button__exit">
              Выйти
            </a>
          </div>
        </div>
        <div className="hello__widget">Здравствуйте, name!</div>
        <div className="table__center">
          <table class="table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Номер телефона</th>
                <th>Почта</th>
                <th>Ставка</th>
                <th>Класс</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>jdjwjd</td>
                <td>Орсичев</td>
                <td>
                  <a href="#" className="td__phone">
                    +79533658890
                  </a>
                </td>
                <td>gentledemeiz@gmail.com</td>
                <td>800 ₽/час</td>
                <td>5</td>
                <td>
                  <a href="#" className="button__edit">
                    i
                  </a>
                </td>
              </tr> */}
              <tr>
                <td>{pupil.name}</td>
                <td>{pupil.surname}</td>
                <td>
                  <a href="#" className="td__phone">
                    +7{pupil.phone}
                  </a>
                </td>
                <td>{pupil.email}</td>
                <td>{pupil.cost} ₽/час</td>
                <td>{pupil.grade}</td>
                <td>
                  <a href="#" className="button__edit">
                    i
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div className="button__container">
        <a href="/auth" className="button__add">
          Добавить ученика
        </a>
      </div>
    </div>
  );
}

export {Main};
