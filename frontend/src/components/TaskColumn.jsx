import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import '../App.css';

const TaskColumn = (props) => {
    return(
        <Navbar >
            <Navbar.Brand href ="/"> FYP Scheduler</Navbar.Brand>
            <Nav className="me-auto">
                {isAuth ? <Nav.Link href = "/">Home</Nav.Link>:null}
            </Nav>
            <Nav>
                {isAuth ? <Nav.Link href = "/logout">Logout</Nav.Link>:
                <Nav.Link href="/login">Login</Nav.Link>}
            </Nav>
        </Navbar>
    );
}

export default TaskColumn;