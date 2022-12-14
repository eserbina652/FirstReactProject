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

/*
App.js
import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
************** удалили рез из импорта *************
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
************** Импортируем useDispatch, useSelector деструктуризируя from "react-redux" ****************
************** Таким же способом импортируем onResetFilter, onSelectFilter **************

function App() {
  удалили состояние билетов, так как теперь есть общий стейт
  вместо состояния билетов создаем константу(data)
  в которой будут храниться данные, которые нужно достать
  с помощью редакс-функции useSelector в аргументах которой
  указываем стейт к которому и обращаемся в теле функции
  доставая значение по следующим ссылкам: стейт.билеты.данные билетов

  useSelector - хук из библиотеки redux, который позволяет
  использовать любое значение со стейта

  удалили состояние фильтров по той же причине
  вместо состояние фильтров создаем константу(filters)
  в которой будут храниться данные полученные в результате
  взаимодействия пользователя со страницей.
  Вызываем useSelector в котором объявляем стейт и обращаемся
  к нужному значению по ссылкам стейт.билеты.фильтры

  так же создаем константу dispatch с помощью встроенной в редакс функции useDispatch()
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
