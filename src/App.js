import LeftCard from "./pages/ticketsValidations/left-card/LeftCard";
import TicketList from "./pages/ticketsValidations/right-card/components/TicketList";
import './app.css'

function App() {
  return (
    <div className="all-wrapper">
      <LeftCard/>
        <TicketList/>
    </div>
  );
}

export default App;
