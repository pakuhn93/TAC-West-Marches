import Header from "../Components/Header";
import { useDateAndTime } from "../Contexts/DateAndTimeContext";

export default function Home(){

    return (
        <section id='homepage'>
            <Header />
            <p>Homepage</p>
            <p className="date_display">Current Date: {useDateAndTime()[0]}</p>
            <p className="time_display">Current Time: {useDateAndTime()[1]}</p>
        </section>
    );
}