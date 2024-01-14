/*
import '../App.css';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
*/
import '../App.css';
import React, { useState, useRef } from 'react';
import {DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-react';


const Weekgrid = (props) => {
    {/*

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
    const [newEvents, setNewEvents] = useState({title: "", start:"", end: ""})
    const [allEvents, setallEvents] = useState(events)


*/}
const calendarRef = useRef();


   const [config, setConfig] = useState({
        viewType: "Week",
        durationBarVisible: false,
        });
        
    return(
        <div>
        {/*        
        <Calendar 
                localizer={localiser} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{height:400, marginLeft:"15vw", marginRight: "5vw", marginTop: "3vw"}}/>
        */}
        <DayPilotNavigator 
         onTimeRangeSelected={ args => {
            console.log("You clicked: " + args.day);
        }}/>
            <DayPilotCalendar  {...config}/>
        </div>
    );
}

export default Weekgrid;