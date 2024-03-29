import {Nav} from 'react-bootstrap';
import '../App.css';

const Sidebar = (props) => {
    
    return(
        <Nav className="col-md-12 d-none d-md-block sidebar justify-content-center"
            activeKey="/Home">
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="">Upcoming Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Calendar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Timetable</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Sidebar;