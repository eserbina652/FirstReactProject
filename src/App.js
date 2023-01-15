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
import DeleteCryptoCoinPopup from "./pages/popup/deleteCryptoCoinPopup/DeleteCryptoCoinPopup";

function App() {
  const isOpenSuccess = useSelector((state) => state.popups.isOpenSuccess);
  const popupItem = useSelector((state) => state.popups.item);
    const isOpenDelete = useSelector((state) => state.popups.isOpenDelete);

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
        {isOpenDelete && <DeleteCryptoCoinPopup/>}
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
Не могу понять почему все попапы вылазят под шапкой сайта,[ position absolute ]
*9* Так же не понимаю как удалить елемент на который нажала, [ очистить делитедАйди после удаления эл ]
*14* Так и не удалось сделать распечатку белетов без дубликатов.
 */






