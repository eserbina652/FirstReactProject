import "./app.css";
import React, {useEffect} from "react";
import Popup from "./popups/Popup";
import PopupSuccess from "./popups/successfulPopup/PopupSuccess";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Main from "./routes/Main";
import CryptoList from "./routes/CryptoList";
import CryptoCardPage from "./routes/CryptoCardPage";
import TrashBoxList from "./routes/TrashBoxList";
import DeleteCryptoCoinPopup from "./popups/deleteCryptoCoinPopup/DeleteCryptoCoinPopup";
import Navbar from "./components/Navbar";
import LivecycleSdk from '@livecycle/sdk';

function App() {
    const isOpenSuccess = useSelector((state) => state.popups.isOpenSuccess);
    const popupItem = useSelector((state) => state.popups.item);
    const isOpenDelete = useSelector((state) => state.popups.isOpenDelete);
    useEffect(() => {
        const initializeSdk = async () => {
            try {
                await LivecycleSdk.init();
            } catch (error) {
                console.error('Failed to initialize Livecycle SDK:', error);
                // Действия в случае ошибки инициализации SDK
            }
        };

        initializeSdk();
    }, []);
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




