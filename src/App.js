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
            <Route path="/crypto" element={<CryptoList/>}/>
            <Route path="/" element={<Main/>}/>
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