import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useDispatch, useSelector } from "react-redux";
import { onResetFilter, onSelectFilter } from "./store/reducers/tickets";

function App() {
  const data = useSelector((state) => state.tickets.ticketsData);
  const filter = useSelector((state) => state.tickets.filters);
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.tickets.currency);
  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);

  useEffect(() => {
    if (filter.length) {
      dispatch(onSelectFilter());
    } else {
      dispatch(onResetFilter());
    }
    // console.log("filter.length", filter.length);
  }, [filter.length]);

  // useEffect(() => {
  //   dispatch(onSetCurrency());
  //   console.log("currency", currency);
  // }, [currency]);

  // const onChangeValue = (str) => {
  //   setValue(str);
  //   console.log("str", str);
  // };
  const addValueInPopup = (item) => {
    console.log("item", item);
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
    }, 3000);
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
        <LeftCard str={currency} />
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
