import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
import { useDispatch, useSelector } from "react-redux";
import { onResetFilter, onSelectFilter } from "./store/reducers/tikets";
/*
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

  следующие константы остаются неизмененными, так как
  они еще не переписаны на редакс-логику:
  const [value, setValue] = useState("UAH");
  const [popupData, setPopupData] = useState(null);
  const [popupSuccess, setPopupSuccess] = useState(false);


  useEffect(() => {
    if (filter.length) {
      onSortByTransfers();
    }
  }, [filter.length]);
 */
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
/*
import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import "./app.css";
import React, { useEffect, useState } from "react";
************** удалили рез из импорта *************
import Popup from "./pages/popup/Popup";
import PopupSuccess from "./pages/successfulPopup/PopupSuccess";
************** Импортируем useDispatch, useSelector деструктуризируя from "react-redux" ****************
************** Таким же способом импортируем onResetFilter, onSelectFilter **************



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

 */
