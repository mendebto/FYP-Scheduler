//react and css
import '../../App.css';
import React, { useState, useEffect } from 'react';
import Toolbar from './toolbar';
//calendar imports
import { Calendar , dateFnsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
//date imports
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from 'react-datepicker';
import moment from "moment";
//firebase imports
import { auth, db } from '../../config';
import { collection,getDocs} from 'firebase/firestore';


const Calgrid = (props) => {
    const locales = {
        "en-IE": require("date-fns/locale/en-IE")
    };

    const localiser = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    });

    const [events,setEvents] = useState([]);
    const [showCanvas, setShowCanvas] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const toggleCanvas = () => {
        setShowCanvas(!showCanvas);
    }

    const handleAddEvent = (newEvents) => {
        setEvents([...events, newEvents]);
        setShowCanvas(false);
        
    }
    
    {/*
    function handleDeleteEvent(event) {
        setallEvents(allEvents.filter(e => e.id!== event.id))
    }
    */}

    return(
        <div className='App'>
            {/*
            <div>
                <input type="text" placeholder='Add title' value={newEvents.title} onChange={(e) => setNewEvents({...newEvents, title: e.target.value})}
                />
                <DatePicker placeholderText = "Select date" style={{marginRight: "10px"}} selected={newEvents.start} onChange={(date) => setNewEvents({...newEvents, start: date})} />
                <DatePicker placeholderText = "Select date" style={{marginRight: "10px"}} selected={newEvents.end} onChange={(date) => setNewEvents({...newEvents, end: date})} />
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add</button>
            </div>
            */}
            <div className='btn-container'>
                <button className='btn-event' onClick={() => {setSelectedEvent(null); toggleCanvas();}}>
                    Add Event
                </button>
                <Toolbar
                    show={showCanvas}
                    onHide={toggleCanvas}
                    onAddEvent={handleAddEvent}
                    selectedEvent={selectedEvent}
                />
            </div>
            

            <div> 
                <Calendar 
                defaultView='work_week'
                views={['day','work_week','month']}
                localizer={localiser}
                events={events}
                selectable={true}
                onSelectSlot={handleAddEvent}
                startAccessor="start" 
                endAccessor="end"
                style={{height:600, marginLeft:"20vw", marginRight: "5vw", marginTop: "3vw"}}
                
                />
            </div>
        
        </div>
    );
}

export default Calgrid;