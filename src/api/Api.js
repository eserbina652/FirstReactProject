import React from 'react';

export default class Api {
    static baseURL = 'https://api.coingecko.com/api/v3'

    static async fetchData(path, requestOptions) {
        try {
            return await this.fetchDataRow(path, requestOptions)
        } catch (e) {
            throw new Error(`Api line 17 ${e}`)
        }
    }

    static async fetchDataRow (path, requestOptions) {
        const response = await fetch(`${this.baseURL}${path}`, requestOptions)
        return await response.json()
    }

    static async getData(path) {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        }
        return this.fetchData(path, requestOptions)

    }

    static getCryptoList = async (page) => {
        return this.getData(
            `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false\n`
        )
    }
}





/*
апи.джс(новая директория апи)

все методы класса статические и асинхронные
Создается класс в котором есть бейзЮРЛ https://api.coingecko.com/api/v3 - это часть ссылки которая не меняется

создать метод фетчДата который принимает путь и настройки запроса,
в блок трай обернуть возвращение этот.фетчДатаРоу(метод ниже)с аргументами как и в самом методе
в блок кетч прокидываем ошибку через глобальный класс с указанием строки в которой произошла ошибка,
тоесть строка следующего метода, так как возвращаемые данные достаются оттуда.

метод фетчДатаРоу с анологичными аргументами в теле метода объявляем запрос в котором фетч обращается к
этому.базовомуУРЛ и указанному пути так же указываем настройки запроса
Возвращаем результат запроса.джейсон

метод гетДата принимает путь в теле метода указываем константу хедерс присваивая ей глобальный клас Хедерс
добавляем к константе имя "Content-Type", и значение "application/json"
указываем настройки запроса
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
возвращаем эту.фетчДату с ее аргументами

Метод гетКриптоЛист принимает асинхронный колбек с аргументом путь и возвращает эту.гетДату с путем
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false\n`
 */