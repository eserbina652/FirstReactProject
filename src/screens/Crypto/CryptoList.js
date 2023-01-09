import React, {useEffect, useState} from 'react';
import Api from "../../api/Api";
import "./crypto.css"

export default () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const getData = async () => {
        try {
            const response = await Api.getCryptoList(page)
            setData((prevState )=> [...prevState, ...response])
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() =>{
      void  getData()
    }, [page])

    const decrease = () => {
        setPage(page - 1)
    }

    const increase = () => {
       setPage(page + 1)
    }
    return (
        <>
            <div>
            <button onClick={decrease}>Prev</button>
            <button onClick={increase}>Next</button>
            </div>
            <div className="cryptoElements-wrapper">
            {data.map((e, index) => {
               return <div className="cryptoElement" key={index}>{e.name}</div>
            })}
            </div>
        </>
    );
};



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