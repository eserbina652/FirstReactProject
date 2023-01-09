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
        return await this.getData(
            `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false\n`
        )
    }
}
