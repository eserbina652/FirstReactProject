import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LeftCard from "../../pages/ticketsValidations/left-card/LeftCard";
import TicketList from "../../pages/ticketsValidations/right-card/components/TicketList";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const hamdleClick = () => {
    navigate("/crypto", { state: { foo: 2 } });
  };
  const goTocrypto = () => {
    setTimeout(() => navigate("/crypto", { state: { foo: 2 } }), 2000);
  };
  useEffect(() => {
    goTocrypto();
  }, []);
  const data = useSelector((state) => state.ticketsData);
  const currency = useSelector((state) => state.currency);
  return (
    <>
      <div className="all-wrapper">
        <LeftCard str={currency} />
        <div onClick={hamdleClick}>Div</div>
        <TicketList value={currency} ticketList={data} />
      </div>
    </>
  );
};
