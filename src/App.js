import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useSelector } from "react-redux";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./screens/Main/Main";
import CryptoList from "./screens/Crypto/CryptoList";

function App() {
  const isOpenSuccess = useSelector((state) => state.popups.successVisible);
  const popupItem = useSelector((state) => state.popups.item);
  return (
    <BrowserRouter>
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Link to="/crypto">CryptoList</Link>
            <Link to="/">Home</Link>
        </div>

      {popupItem && <Popup />}
      {isOpenSuccess && <PopupSuccess />}
        <Routes>
            <Route path="/crypto" element={CryptoList}/>
            <Route path="/" element={Main}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;












/*
Апп.джс
все елементы оборачиваются в браузер роутер
внутри которого сразу идут линки  с атрибутом ту(в котором указывается как будет изменятся ссылка)
и текст самой ссылки, далее
Route - в данном компоненте нужно указать путь(пас) и страницу(елемент) на которую юзер
будет попадать по указанной ссылке
Route обязательно должен находится внутри Routes
 */

/*
BrowserRouter - it is wrapper
The element that is at the top is always visible on each page
We must wrap pages in Rotes tag, don't forget to specify the way of page
in attribute 'path' and attribute to in first el which always visible and
to specify (attribute with name 'element') the el to which this way belongs.
 */

/*
// useLocation - хук с помощью которого можно достать значение с другой страницы
новая директория скринс и папака крипто
КриптоЛист.джс

экспортируем по дефолту колбек в котором прописываем компонент
объявляем данные и функцию изменения данных с помощью хука юзстейт изначальное состояние массив
по такой же схеме объявляем страницы изнач сост 1

getData - асинхронная функцция для получения данных с сервера
в блок трай оборачиваем запрос на сервер Апи.гетКриптолист(кол-во страниц),
гетКриптолист(кол-во страниц) - это статическая ссылка в которую передается число,
с помощью функции изменяющей данные разворачиваем предыдущие и новые значения,
в блок кетч оборачиваем консольку с ошибкой

в юзЭффекте, который будет следить за кол-м стр. вызываем функцию гетДата,
также создаем две функции которые будут увеличивать и уменьшать кол-во стр.

Данная функция будет возвращать див на каждый ел. масива данных,
а также две кнопки некст и прев в который через онклик нужно передать соответствующие функции
для уменьшения кол-ва стр. по клику на кнопку

 */



/*
апи.джс(новая директория апи)

все методы класса статические и асинхронные
Создается класс в котором есть бейзЮРЛ https://api.coingecko.com/api/v3 - это часть ссылки которая не меняется

создать метод фетчДата который принимает путь и настройки запроса,
в блок трай обернуть возвращение этот.фетчДатаРоу(метод ниже)с аргументами как и в самом методе
в блок кетч прокидываем ошибку через глобальный класс с указанием строки в которой произошла ошибка,
тоесть строка следующего метода, так как возвращаемые данные достаются оттуда.

метод фетчДатаРоу с анологичными аргументами в теле метода объявляем запрос в котором фетч обращается к
этому.базовомуУРЛ и указанному пути так же указываем настройки запроса
Возвращаем результат запроса.джейсон

метод гетДата принимает путь в теле метода указываем константу хедерс присваивая ей глобальный клас Хедерс
добавляем к константе имя "Content-Type", и значение "application/json"
указываем настройки запроса
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
возвращаем эту.фетчДату с ее аргументами

Метод гетКриптоЛист принимает асинхронный колбек с аргументом путь и возвращает эту.гетДату с путем
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false\n`
 */


/*
новая директория скринс и папака мейн
Мейн.джс
Хук юзНавигейт используеться для работы навигации не через ссылки,
а с помощью хука в аргументах которого сразу указывается изменения в ссылке,
и доп параметры(чаще всего объект) данные аргументы указываются при вызове хука

Вызываем хук с помощью колбек функции

достаем данные билетов и валютты

возвращаем карточки левую и правую и див между ними, к которому по клику подключаем
функцию в которой был вызван хук юзнавигейт
 */