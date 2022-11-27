import React from 'react';
import './valutaButtons.css'

const ValutaButtons = () => {
    return (
        <div>
          <div>
              <h3 className="left-card-header">Currency</h3>
            <div className="buttons-wrapper">
              <button className="valuta-button">UAH</button>
              <button className="valuta-button">USD</button>
              <button className="valuta-button">EUR</button>
            </div>
          </div>
        </div>
    );
};

export default ValutaButtons;