import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useDispatch, useSelector } from "react-redux";
import { onResetFilter, onSelectFilter } from "./store/reducers/tikets";

function App() {
  const data = useSelector((state) => state.tickets.ticketsData);
  const filters = useSelector((state) => state.tickets.filters);
  const dispatch = useDispatch();
  //TODO Перенести логику изменения валюты в редакс
  //TODO  Перенести логику изменения валюты в редакс
  // TODO перенести логику работы с попапом в редакс
  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);

  useEffect(() => {
    if (filters.length) {
      dispatch(onSelectFilter());
    } else {
      dispatch(onResetFilter());
    }
  }, [filters.length]);

  const onChangeValue = (str) => {
    setValue(str);
    console.log(str);
  };

  const addValueInPopup = (item) => {
    setPopupData(item);
  };
  const closePopup = () => {
    setPopupData(null);
    setPopupSuccess(false);
  };

  const openSuccess = () => {
    if (popupData) {
      setPopupData(null);
      setPopupSuccess(true);
    }
    setTimeout(() => {
      setPopupSuccess(false);
    }, 10000);
  };

  return (
    <>
      {popupData && (
        <Popup
          openSuccess={openSuccess}
          closePopup={closePopup}
          item={popupData}
          addValueInPopup={addValueInPopup}
        />
      )}
      {popupSuccess && <PopupSuccess closePopup={closePopup} />}
      <div className="all-wrapper">
        <LeftCard onChangeValue={onChangeValue} />
        <TicketList
          closePopup={closePopup}
          addValueInPopup={addValueInPopup}
          value={value}
          ticketList={data}
        />
      </div>
    </>
  );
}

export default App;
