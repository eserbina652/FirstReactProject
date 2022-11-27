import React, {useState} from 'react';
import res from "../response";
import Ticket from "./Ticket";

const TicketList = () => {
    const [state, setState] = useState(res)
    console.log(state)
    return (
        <>
          <div>
            {state.map((e, index) => <Ticket item={e} key={index.toString()}/> )}
          </div>
        </>
    );
};

export default TicketList;