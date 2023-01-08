import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useSelector } from "react-redux";
import {BrowserRouter} from "react-router-dom";

function App() {
  const data = useSelector((state) => state.tickets.ticketsData);
  const isOpenSuccess = useSelector((state) => state.popups.successVisible);
  const popupItem = useSelector((state) => state.popups.item);
  return (
    <BrowserRouter>

      {popupItem && <Popup />}
      {isOpenSuccess && <PopupSuccess />}
      <div className="all-wrapper">
        <LeftCard />
        <TicketList ticketList={data} />
      </div>
    </BrowserRouter>
  );
}

export default App;

