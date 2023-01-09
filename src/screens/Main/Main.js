import React from 'react';
import LeftCard from "../../pages/ticketsValidations/left-card/LeftCard";
import TicketList from "../../pages/ticketsValidations/right-card/components/TicketList";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()

    const data = useSelector((state) => state.tickets.ticketsData);
    return (
        <>
            <div className="all-wrapper">
                <LeftCard />
                <div>Click Me</div>
                <TicketList ticketList={data} />
            </div>
        </>
    );
};

export default Main;


/*
новая директория скринс и папака мейн
Мейн.джс
Хук юзНавигейт используеться для работы навигации не через ссылки,
а с помощью хука в аргументах которого сразу указывается изменения в ссылке,
и доп параметры(чаще всего объект) данные аргументы указываются при вызове хука

Вызываем хук с помощью колбек функции

достаем данные билетов и валютты

возвращаем карточки левую и правую и див между ними, к которому по клику подключаем
функцию в которой был вызван хук юзнавигейт
 */