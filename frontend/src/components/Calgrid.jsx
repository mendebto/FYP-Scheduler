//react and css
import './../App.css';
import React, { useState, useEffect } from 'react';
//calendar imports
import { Calendar , dateFnsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
//date imports
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from 'react-datepicker';
//firebase imports
import { auth, db } from '../config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

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

    const onSelectSlot = (e) => {
        console.log("pressed Date: ", e)
    };

    const [events, setEvents] = useState();
    
    useEffect(()=> {
        onSnapshot(
            query(
                collection(db, "student_req_table"),
                where("uid","==", auth.currentUser.uid),
            ),
            (snapshot) => setEvents(snapshot.doc)
        ), []
    })

    {/*
    function handleDeleteEvent(event) {
        setallEvents(allEvents.filter(e => e.id!== event.id))
    }
    */}

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
            <div>
                
                <Calendar 
                defaultView='work_week'
                views={['day','work_week','month']}
                localizer={localiser}
                events={events}
                selectable={true}
                onSelectSlot={onSelectSlot}
                startAccessor="start" 
                endAccessor="end"
                style={{height:600, marginLeft:"20vw", marginRight: "5vw", marginTop: "3vw"}}
                />
            </div>
        
        </div>
    );
}

export default Calgrid;