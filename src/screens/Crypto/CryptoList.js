import React from 'react';

const CryptoList = () => {
    return (
        <div>
            
        </div>
    );
};

export default CryptoList;


/*
// useLocation - хук с помощью которого можно достать значение с другой страницы
новая директория скринс и папка крипто
КриптоЛист.джс

экспортируем по дефолту колбек в котором прописываем компонент
объявляем данные и функцию изменения данных с помощью хука юзстейт изначальное состояние массив
по такой же схеме объявляем страницы изнач сост 1

getData - асинхронная функцция для получения данных с сервера
в блок трай оборачиваем запрос на сервер Апи.гетКриптолист(кол-во страниц),
гетКриптолист(кол-во страниц) - это статическая ссылка в которую передается число,
с помощью функции изменяющей данные разворачиваем предыдущие и новые значения,
в блок кетч оборачиваем консольку с ошибкой

в юзЭффекте, который будет следить за кол-м стр. вызываем функцию гетДата,
также создаем две функции которые будут увеличивать и уменьшать кол-во стр.

Данная функция будет возвращать див на каждый ел. масива данных,
а также две кнопки некст и прев в который через онклик нужно передать соответствующие функции
для уменьшения кол-ва стр. по клику на кнопку

 */