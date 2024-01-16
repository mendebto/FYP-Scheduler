import {Nav} from 'react-bootstrap';
import {withRouter} from "react-router";
import '../App.css';

const TaskColumn = (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null){
            setIsAuth(true);
        }
    }, [isAuth]);

    return(
        <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/Home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
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

export default TaskColumn;