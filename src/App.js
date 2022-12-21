import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect } from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useDispatch, useSelector } from "react-redux";
import { onResetFilter, onSelectFilter } from "./store/reducers/tickets";

function App() {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.ticketsData);
  const currency = useSelector((state) => state.currency);
  // const filter = useSelector((state) => state.tickets.filters);
  // const popupItem = useSelector((state) => state.popups.item);
  // const isOpenSuccess = useSelector((state) => state.popups.isOpenSuccess);

  // useEffect(() => {
  //   if (filter.length) {
  //     dispatch(onSelectFilter());
  //   } else {
  //     dispatch(onResetFilter());
  //   }
  // }, [filter.length]);

  return (
    <>
      {/*{popupItem && <Popup />}*/}
      {/*{isOpenSuccess && <PopupSuccess />}*/}
      <div className="all-wrapper">
        <LeftCard str={currency} />
        <TicketList value={currency} ticketList={data} />
      </div>
    </>
  );
}

export default App;
