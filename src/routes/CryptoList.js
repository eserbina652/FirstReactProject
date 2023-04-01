import React, {useEffect, useState} from 'react';
import Api from "../api/Api";
import CryptoCard from "../screens/Crypto/cryptoCards/CryptoCard";
import "../screens/Crypto/cryptoList.css"

export default () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const getData = async () => {
        try {
            const response = await Api.getCryptoList(page)
            setData((prevState) => [...prevState, ...response])
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        void getData()
    }, [page])

    const decrease = () => {
        setPage(page - 1)
    }

    const increase = () => {
        setPage(page + 1)
    }
    console.log('data', data);
    return (
        <>
            <div className="button-wrap">
                <button className="decreaseButton" onClick={decrease}>Previous</button>
                <button className="increaseButton" onClick={increase}>Next</button>
            </div>
            <div>
                {data.map((e, index) => {
                    return (
                        <CryptoCard item={e} key={index.toString()}/>
                    )
                })}
            </div>
        </>
    );
};





