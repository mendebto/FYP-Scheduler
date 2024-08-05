import { useState } from "react";
import moment from "moment";


const Toolbar = ({show, onHide, onAddEvent}) => {
    const [title,setTitle] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = () => {
        const newEvents = {
            id:Math.random,
            title,
            start: moment(date).set({hour:startTime.split(':'[0]), minute:startTime.split(':'[1])}).toDate(),
            end:  moment(date).set({hour:startTime.split(':'[0]), minute:startTime.split(':'[1])}).toDate(),
        };
        onAddEvent(newEvents);
    }

    return(
        <div className={`show ${show ? 'show': ''}`}>
            <div className="toolbar-content">
                <div className="toolbar-header">
                    <h3>Add Event</h3>
                    <button className="close-btn" onClick={onHide}>Close</button>
                </div>

                <div className="toolbar-body">
                    <label>Title</label>
                    <input 
                        type="text"
                        placeholder="Event title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Date</label>
                    <input
                        type="date"
                        placeholder="Event title"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    /> 

                    <label>Start Time</label>
                    <input
                        type="time"
                        placeholder="Event title"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />

                    <label>End Time</label>
                    <input
                        type="time"
                        placeholder="Event title"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />

                    <button className="btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )

}

export default Toolbar;