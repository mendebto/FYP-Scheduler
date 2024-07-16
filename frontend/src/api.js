export class Test {
    static login(body) {
        return fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }
        })
    }

    static register(body) {
        return fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }
        })
    }

    static getTimetable(body) {
        return fetch('http://127.0.0.1:8000/timetable', {
            method: 'GET',
            headers: {
                'Content-T  ype': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }
        })
    }

    static updateTimetable(body) {
        return fetch('http://127.0.0.1:8000/timetable/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    static createTimetable(body) {
        return fetch('http://127.0.0.1:8000/timetable/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    static deleteTimetable(body) {
        return fetch('http://127.0.0.1:8000/timetable/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}