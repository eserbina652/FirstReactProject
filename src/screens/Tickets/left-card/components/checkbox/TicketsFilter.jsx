import React, {useEffect} from "react";
import "./checkbox.css";
import {useDispatch, useSelector} from "react-redux";
import {onResetFilter, onSelect, onSelectFilter, onSetFilter} from "../../../../../store/reducers/tickets";

const TicketsFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.tickets.filters);
    const setFilter = (filter) => {
        dispatch(onSetFilter(filter));
    };
    const onReset = () => {
        dispatch(onResetFilter());
    };

    useEffect(() => {
        if (filters.length) {
            dispatch(onSelectFilter());
        } else {
            dispatch(onResetFilter());
        }
    }, [filters.length]);
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
                        <input type="checkbox" onChange={() => onReset()}/>
                        <div className="checkbox__text">All</div>
                    </label>
                    <label title={"Without transfers"} className="checkbox">
                        <input type="checkbox" onChange={() => setFilter(0)}/>
                        <div className="checkbox__text">Without transfers</div>
                    </label>
                    <label title={"1 transfers"} className="checkbox">
                        <input type="checkbox" onChange={() => setFilter(1)}/>
                        <div className="checkbox__text">1 transfers</div>
                    </label>
                    <label title={"2 transfers"} className="checkbox">
                        <input type="checkbox" onChange={() => setFilter(2)}/>
                        <div className="checkbox__text">2 transfers</div>
                    </label>
                    <label title={"3 transfers"} className="checkbox">
                        <input type="checkbox" onChange={() => setFilter(3)}/>
                        <div className="checkbox__text">3 transfers</div>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default TicketsFilter;
