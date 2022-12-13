import { createSlice } from "@reduxjs/toolkit";
import res from "../../../pages/ticketsValidations/right-card/response";

const initialState = {
  ticketsData: res,
  filters: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    onSelect: (state, action) => {
      state.ticketsData.sort((a, b) => a.stops - b.stops);
      return state;
    },
    onSetFilter: (state, action) => {
      if (action.payload || action.payload === 0) {
        if (state.filters?.includes(action.payload)) {
          state.filters = state.filters.filter((el) => el !== action.payload);
        } else {
          state.filters = [...state.filters, action.payload];
        }
      }
      return state;
    },
    onSelectFilter: (state, action) => {
      state.ticketsData = initialState.ticketsData.filter((el) => {
        state.filters.includes(el.stops);
      });
      return state;
    },
    onResetFiter: (state, action) => {
      return initialState;
    },
  },
});

export const { onSelect, onSetFilter, onSelectFilter, onResetFilter } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
/*
tickets/index.js
импортируем функцию createSlice(деструктуризируя) и рез
создаем объект изначального состояния с элементами
ticketsData и значением рез, а также фильтры со значением массива

создаем функию ticketsSlice с помощью createSlice(сразу экпортируя)
в теле которой создаем объект с элементами: имя: "tickets",
изначальное состояние: изначальное состояние, и reducers,
значением которого будут методы(экшены в дальнейшем),
каждый метод принимает состояние и экшн, а методы следующие:
*/
/*
onSelect: (состояние и экшн) в теле данного метода
будет выполняться сортировка по количеству остановок,
для этого нужно обратиться к состоянию.элементу ticketsData
и вызвать метод сорт в котором указать логику а-б.
Обязательно возвращать стейт(состояние) перед завершением каждого метода.
*/
/*
onSetFilter: тут выполняется изменение первоначального состояния и
добавление в массив данных о количестве пересадок для тех билетов,
которые с помощью чекбокса выбрал пользователь.
В теле функции объявляем блок иф(action.payload || action.payload === 0)
в теле блока иф указываем доп блок иф(state.filters?.includes(action.payload))
тогда стейт.фильтры = стейт.фильтры.вызов метода фильтр в котором логика:
если елемент не равен action.payload, и есл присваиваем state.filters новый массив
в который разворачиваем систояниепо ссылке фильтры и сам action.payload.
Обязательно возвращаем стейт.
*/
/*
onSelectFilter: изменяет состояние массива с помощью выбранных пользователем данных
в теле метода присваиваем состоянию.информации о билетах =
изначальное значение.информация о билетах.вызов метода фильтр,
в котором каждый ел будет проверяться на наличие подходящего количества остановок и
заноситься(с помощью метода includes) в состояние.фильтры
Обязательно возвращаем стейт.
*/
/*
onResetFilter: возвращение билетов флаг сортировки с которых был снят
в теле метода просто возвращаем изначальное состояние

по-завершению функции выполняем экспорт const всех написанных в функции
методов(деструктуризируя) и присваиваем данному экспорту значение ticketsSlice.actions

Также экспортируем ticketsSlice.reducer по дефолту

 */
