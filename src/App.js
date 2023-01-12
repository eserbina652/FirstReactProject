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
import CryptoCardPage from "./screens/Crypto/cryptoCardPage/CryptoCardPage";
import {airplane, cryptoCoin, trashBox} from "./assets";
import TrashBoxList from "./screens/TrashBox/TrashBoxList";

function App() {
  const isOpenSuccess = useSelector((state) => state.popups.successVisible);
  const popupItem = useSelector((state) => state.popups.item);
  return (
    <BrowserRouter>
        <div className="header">
            <Link className="links-wrapper" to="/crypto">
                <p className="header-text">Crypto-Coins</p>
                <img className="links-img" src={cryptoCoin} alt="Crypto-Coins"/>
            </Link>
            <Link className="links-wrapper" to="/">
                <p className="header-text">Airplane Tickets</p>
                <img className="links-img" src={airplane} alt="Airplane Tickets"/>
            </Link>
            <Link className="links-wrapper" to="/trashBox">
                <p className="header-text">Shopping Basket</p>
                <img className="links-img" src={trashBox} alt="trashBox"/>
            </Link>
        </div>

      {popupItem && <Popup />}
      {isOpenSuccess && <PopupSuccess />}
        <Routes>
            <Route path="/crypto" element={<CryptoList/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/cryptoPage" element={<CryptoCardPage/>}/>
            <Route path="/trashBox" element={<TrashBoxList/>}/>
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






