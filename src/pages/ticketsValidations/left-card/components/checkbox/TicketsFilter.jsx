import React from "react";
import "./checkbox.css";

const TicketsFilter = ({ onSetFilter, onClickAll }) => {
  return (
    <div>
      <div>
        <h3 className="left-card-header">Number of transfers</h3>
      </div>
      <div>
        <form
          action="/react/first-project-of-react/public"
          className="tickets-form"
        >
          <label title={"All"} className="checkbox">
            <input type="checkbox" onChange={() => onClickAll()} />
            <div className="checkbox__text">All</div>
          </label>
          <label title={"Without transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSetFilter(0)} />
            <div className="checkbox__text">Without transfers</div>
          </label>
          <label title={"1 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSetFilter(1)} />
            <div className="checkbox__text">1 transfers</div>
          </label>
          <label title={"2 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSetFilter(2)} />
            <div className="checkbox__text">2 transfers</div>
          </label>
          <label title={"3 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSetFilter(3)} />
            <div className="checkbox__text">3 transfers</div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default TicketsFilter;

/*
import React from "react";
import "./checkbox.css";
Импортируем useDispatch
также ипортируем onResetFilter, onSetFilter
все это с помощью деструктуризации

Удаляем пропсы из TicketsFilter, а в теле функции
создаем константу dispatch с помощью одного из
импортированных методов, далее создаем метод onSelectFilter,
который будет принимать filter и в теле метода с помощью dispatch
сразуже используем его. По аналогии делаем фильтр onReset, но без аргументов
Остальное без изменений
 */
