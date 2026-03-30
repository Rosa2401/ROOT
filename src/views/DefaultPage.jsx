import '../App.css'
import Eventlist from '../components/Eventlist';
import mitbillede from "../assets/fredagsbar.jpg";
import candles from "../assets/2024-candles.mp4";
import backgroundmusic from "../assets/backgroundmusic.mp3";
import Searchfield  from '../components/searchfield';
import { useEffect, useState } from 'react';

function DefaultPage() {

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  function handleinput(event) {
    setFilter(event.target.value);
  }

  const sortedEvents = events.toSorted((a,b) =>
  a.date.localeCompare(b.date, "da", {sensitivity: "case"})
  );

  const filteredEvents=sortedEvents.filter(event=>
    event.title.toLowerCase().includes(filter.toLowerCase()) || 
    event.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <img src={mitbillede} alt='Øl og blomster' width="500"/>
      <video src={candles} controls width="500"/>
      <audio src={backgroundmusic} controls />
      <Searchfield inputhandler={handleinput} filter={filter}/>
      <Eventlist events={filteredEvents} setEvents={setEvents} />
    </section>
  )
}

export default DefaultPage
