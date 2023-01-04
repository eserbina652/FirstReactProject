// @ts-ignore

import { logDOM } from "@testing-library/react";

export default class Api {
  static baseUrl = "https://api.coingecko.com/api/v3";

  static async fetchData(path, requestOptions) {
    console.log("requestOptions", requestOptions);
    try {
      return await this.fetchDataRaw(path, requestOptions);
    } catch (e) {
      throw new Error(`API line 17 ${e}`);
    }
  }

  static async fetchDataRaw(path, requestOptions) {
    const response = await fetch(`${this.baseUrl}${path}`, requestOptions);
    console.log("path", path);
    return await response.json();
  }

  static async getData(path) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); //для чего значения и к чему уни относятся

    const requestOptions = {
      method: "GET",
      headers: myHeaders, // не поняла почему в консоли значение Headers
      redirect: "follow",
    };
    return this.fetchData(path, requestOptions);
  }
  // static async postData(path) {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //
  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   return this.fetchData(path, requestOptions);
  // }
  static getCryproList = async (page) => {
    return this.getData(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false\n`
    );
  };
}

/*
Создается класс в котором есть бейзЮРЛ - это часть ссылки которая не меняется
 */
