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

  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);

  useEffect(() => {
    if (filter.length) {
      dispatch(onSelectFilter());
    } else {
      dispatch(onResetFilter());
    }
  }, [filter.length]);

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
    }, 3000);
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

/*
App.js


function App() {
  удалили состояние билетов, так как теперь есть общий стейт
  вместо состояния билетов создаем константу(data)
  в которой будут храниться данные, которые нужно достать
  с помощью редакс-функции useSelector в аргументах которой
  указываем стейт к которому и обращаемся в теле функции
  доставая значение по следующим ссылкам: стейт.билеты.данные билетов


  dispatch - это метод который передает actionы в redux

  следующие константы остаются неизмененными, так как
  они еще не переписаны на редакс-логику:
  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);

  useEffect(() => {
    if (filter.length) {
      удаляем onSortByTransfers() и вызываем onSelectFilter с помощью функции dispatch;
    } а так же создаем блок елс в котором вызываем onResetFilter с помощью той же функции
  }, [filter.length]);

  Начиная с функции onSort по onClickAll удаляем, так как теперь
  эти действия выполняются с помощью reduxа

  следующие функции остаются неизменными
  const onChangeValue = (str) => {
    setValue(str);
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
      }, 3000); //тут изменяется только кол-во мс
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

        из LeftCard удаляем все кроме onChangeValue
          <LeftCard
            onChangeValue={onChangeValue}
          />
          <TicketList
            closePopup={closePopup}
            addValueInPopup={addValueInPopup}
            value={value}

            ticketList={data} //заменить значение ticketList на data,
            так как теперь данные хранятся в data

            Далее все как и прежде
 */
