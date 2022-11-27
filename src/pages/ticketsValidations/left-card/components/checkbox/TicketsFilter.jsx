import React from 'react';
import './checkbox.css'

const TicketsFilter = () => {
    return (
        <div>
            <div>
                <h3 className="left-card-header">Number of transfers</h3>
            </div>
            <div>
                <form action="/react/first-project-of-react/public" className="tickets-form">
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__text">All</div>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__text">Without transfers</div>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__text">1 transfers</div>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__text">2 transfers</div>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <div className="checkbox__text">3 transfers</div>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default TicketsFilter;