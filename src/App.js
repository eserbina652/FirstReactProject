import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
import res from "./pages/ticketsValidations/right-card/response";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";

function App() {
  const [ticketList, setTicketList] = useState(res);
  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);

  // useEffect(() => {
  //   if ()
  // })

  useEffect(() => {
    if (filter.length) {
      onSortByTransfers();
    }
  }, [filter.length]);

  const onSort = () => {
    setTicketList((prevState) => {
      const temp = [...prevState];
      temp.sort((a, b) => a.stops - b.stops);
      console.log("temp", temp);
      return temp;
    });
  };

  const onSortByTransfers = () => {
    setTicketList(res.filter((el) => filter.includes(el.stops)));
  };

  const onSetFilter = (num) => {
    // console.log("zdes");
    if (num || num === 0) {
      if (filter?.includes(num)) {
        setFilter((prevState) => prevState?.filter((el) => el !== num));
      } else {
        setFilter((prevState) => [...prevState, num]);
      }
    }
  };

  const onClickAll = () => {
    setTicketList(res);
  };

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

  console.log(filter);
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
        <LeftCard
          onClickAll={onClickAll}
          onChangeValue={onChangeValue}
          onSetFilter={onSetFilter}
          onSort={onSort}
        />
        <TicketList
          closePopup={closePopup}
          addValueInPopup={addValueInPopup}
          value={value}
          ticketList={ticketList}
        />
      </div>
    </>
  );
}

export default App;
