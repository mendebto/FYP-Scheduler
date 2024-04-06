
import './../App.css';
import React, { useState, useRef, useEffect } from 'react';
import { Calendar , dateFnsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';


  const locales = {
        "en-IE": require("date-fns/locale/en-IE")
    }

    const localiser = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })


    const events = [
        {
            title: "Interim presentation",
            allDay: true,
            start: new Date(2023,11,13),
            end : new Date(2023,11,13)
        },
        {
            title: "Xmas holiday",
            start: new Date(2023,11,15),
            end: new Date(2023,11,15)
        },
    ]
const Calgrid = (props) => {
    
  
    const [newEvents, setNewEvents] = useState({title: "", start:"", end: ""})
    const [allEvents, setallEvents] = useState(events)
    
    function handleAddEvent(event) {
        for(let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start)
            const d2 = new Date(newEvents.start)
            const d3 = new Date(allEvents[i].end)
            const d4 = new Date(newEvents.end)

        }
        setallEvents([...allEvents, newEvents])
    }
    {/*
    function handleDeleteEvent(event) {
        setallEvents(allEvents.filter(e => e.id!== event.id))
    }
    */}
    

    const calendarRef = useRef();
    const [config, setConfig] = useState({
        viewType: "Week",
        durationBarVisible: false,
        });

    return(
        <div>
            {/*
            <div>
                <input type="text" placeholder='Add title' value={newEvents.title} onChange={(e) => setNewEvents({...newEvents, title: e.target.value})}
                />
                <DatePicker placeholderText = "Select date" style={{marginRight: "10px"}} selected={newEvents.start} onChange={(date) => setNewEvents({...newEvents, start: date})} />
                <DatePicker placeholderText = "Select date" style={{marginRight: "10px"}} selected={newEvents.end} onChange={(date) => setNewEvents({...newEvents, end: date})} />
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add</button>
            </div>
            */}
            
        <Calendar 
            defaultView='work_week'
            views={['day','work_week','month']}
            localizer={localiser}
            events={allEvents}             
            startAccessor="start" 
            endAccessor="end"
            style={{height:600, marginLeft:"20vw", marginRight: "5vw", marginTop: "3vw"}}
        />
        </div>
    );
}

export default Calgrid;