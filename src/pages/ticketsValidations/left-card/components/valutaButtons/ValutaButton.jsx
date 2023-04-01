import React from "react";
import "./valutaButtons.css";
import SortButton from "../../../../../components/Button/SortButton";
import {useDispatch} from "react-redux";
import {onSetCurrency} from "../../../../../store/reducers/tickets";

const ValutaButton = () => {
    const dispatch = useDispatch();
    const setCurrency = (str) => {
        dispatch(onSetCurrency(str));
    };
    return (
        <div>
            <div>
                <h3 className="left-card-header">Currency</h3>
                <div className="buttons-wrapper">
                    <SortButton
                        onClick={() => {
                            setCurrency("EUR");
                        }}
                        title={"EUR"}
                    />
                    <SortButton onClick={() => setCurrency("UAH")} title={"UAH"}/>
                    <SortButton onClick={() => setCurrency("USD")} title={"USD"}/>
                </div>
            </div>
        </div>
    );
};

export default ValutaButton;
