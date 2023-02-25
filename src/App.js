import "./app.css";
import React from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import {useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./screens/Main/Main";
import CryptoList from "./screens/Crypto/CryptoList";
import CryptoCardPage from "./screens/Crypto/cryptoCardPage/CryptoCardPage";
import TrashBoxList from "./screens/TrashBox/TrashBoxList";
import DeleteCryptoCoinPopup from "./pages/popup/deleteCryptoCoinPopup/DeleteCryptoCoinPopup";
import Navbar from "./components/Navbar";

function App() {
    const isOpenSuccess = useSelector((state) => state.popups.isOpenSuccess);
    const popupItem = useSelector((state) => state.popups.item);
    const isOpenDelete = useSelector((state) => state.popups.isOpenDelete);

    return (
        <>
            <Navbar/>
            {popupItem && <Popup/>}
            {isOpenSuccess && <PopupSuccess/>}
            {isOpenDelete && <DeleteCryptoCoinPopup/>}
            <Routes>
                <Route path="/crypto" element={<CryptoList/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/cryptoPage" element={<CryptoCardPage/>}/>
                <Route path="/trashBox" element={<TrashBoxList/>}/>
            </Routes>
        </>
    );
}

export default App;


/*
success styles!
 */





