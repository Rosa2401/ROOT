import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem("events");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const [title, setTitle] = useState("");
    const [date, setDate] = useState ("");
    const [description, setDescription] = useState ("");

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    function createHandler(e) {
        e.preventDefault();
        const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1;
        const newEvent = { id: highestId+1, title: title, date: date, description: description };
        setEvents([...events, newEvent]);
        navigate("/"); 
    }

    return (
        <form onSubmit={createHandler}>
            <h3>Create New Event</h3>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} required onChange={(e)=>setTitle(e.target.value)}/><br />
            <br />

            <label htmlFor="date">Date: </label>
            <input type="date" id="date" name="date" value={date} required onChange={(e)=>setDate(e.target.value)}/><br />
            <br />

            <label htmlFor="description">Description: </label>
            <textarea id="description" name="description" value={description} required onChange={(e) => setDescription(e.target.value)}></textarea><br /> 
            <br />

            <button type="submit">Create</button>

        </form>
    )
    
}

