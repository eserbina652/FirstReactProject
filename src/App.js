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
  const popupItem = useSelector((state) => state.popups.item);
  const isOpenSuccess = useSelector((state) => state.popups.isOpenSuccess);
  // const [value, setValue] = useState("UAH");
  // const [popupData, setPopupData] = useState(null);
  // const [popupSuccess, setPopupSuccess] = useState(false);

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
  // const addValueInPopup = (item) => {
  //   console.log("item", item);
  //   setPopupData(item);
  // };
  // const closePopup = () => {
  //   setPopupData(null);
  //   setPopupSuccess(false);
  // };
  //
  // const openSuccess = () => {
  //   if (popupData) {
  //     setPopupData(null);
  //     setPopupSuccess(true);
  //   }
  //   setTimeout(() => {
  //     setPopupSuccess(false);
  //   }, 3000);
  // };
  console.log("App/js/popupItem", popupItem);
  return (
    <>
      {popupItem && <Popup />}
      {isOpenSuccess && <PopupSuccess />}
      <div className="all-wrapper">
        <LeftCard str={currency} />
        <TicketList
        // ticketList={data} value={currency}
        />
      </div>
    </>
  );
}

export default App;
