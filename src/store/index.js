import {configureStore} from "@reduxjs/toolkit";

export default const configureStore = {
    reducer:
}
/*
store/index.js
configureStore - это функция которая позволяет использовать множество reducerов
объявляем функцию configureStore(которую сразуже экспортируем по дефолту)
в теле которой объявляем объект с ключем reducer и значением объекта
с ключем tickets и значением ticketsSlice, не забываем
об импорте configureStore и ticketsSlice

 */
