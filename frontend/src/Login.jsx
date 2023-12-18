import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Home from './Home'
import ClubHome from './ClubHome'
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Replace with your API endpoint
        const loginUrl = 'http://localhost:8080/api/auth/login';

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Assuming the response includes a 'clubId'
                localStorage.setItem('clubId', data.clubId);
                setMessage('Login successful');
                navigate(`/home`); // Redirect to donations page
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            setMessage('Login failed: ' + error.message);
        }
    };

    /* const handleSubmit = () => {
        if(studentId==1234)
        navigate(`/home`);
        else if(studentId==4321){
            console.log("login handle submit")
            navigate(`/club-home`);
        }
    } */

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <Card className="center-card flex flex-column">
                <div>
                    <label>Username:</label>
                    <InputText
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <InputText
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="surface-300 border-none">Login</Button> {/* onClick={handleSubmit} */}
                </Card>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
/* import { InputText } from 'primereact/inputtext';
import { useState } from 'react'
import { Outlet, Route, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import Home from './Home'
import ClubHome from './ClubHome'
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';

export default function Login() {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleChange(input) {
        setStudentId(input);
    }

    function handlePasswordChange(input) {
        setPassword(input);
    }

    const handleSubmit = () => {
        if(studentId==1234)
        navigate(`/home`);
        else if(studentId==4321){
            console.log("login handle submit")
            navigate(`/club-home`);
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
    } 

    return (
        <div className="center-container grid p-fluid">
        <p></p>
            <Card className="center-card flex flex-column">
                <h2 className="">Login</h2>
                <InputText className="border-round h4 mb-4" value={studentId} placeholder="Student ID" onChange={(event) => handleChange(event.target.value)} />
                <Password className="mb-4" value={password} placeholder="Password" onChange={(event) => handlePasswordChange(event.target.value)} toggleMask />
                <Button onClick={handleSubmit} className="surface-300 border-none">Submit</Button>
                <Outlet />
            </Card>
        </div>
    );
} */