import { Link } from "react-router-dom";

export default function Eventitem(props){ 

    const idag=new Date().toISOString().split("T")[0];
    
// Funktion modtager dato som tekst og konverterer den til formatet dd. mm. yy.
    function formatDate(dateString){
        const date = new Date(dateString);
        const newDate = date.toLocaleDateString('da-DK',{
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        return newDate;
    }
  
    return (
        <div id="eventitem">
            <h3>{props.event.title}</h3>
            <h4>{props.event.date === idag ? "I dag": props.event.date > idag ? "Kommende" : "Historisk"}</h4>
            <p>{formatDate(props.event.date)}</p>
            <p>{props.event.description}</p>
            <Link to={`/update/${props.event.id}`}>Update event</Link>&nbsp;
            <button onClick={() => props.deleteHandler(props.event.id)}>Delete event</button>
        </div>
    );
}