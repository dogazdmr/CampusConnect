import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ClubLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Replace with your API endpoint
        const loginUrl = 'http://localhost:8080/api/club/auth/login';

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
                navigate('/club-home'); // Redirect to donations page
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            setMessage('Login failed: ' + error.message);
        }
    };

    return (
        <div className="center-container grid p-fluid">
        <Card className="center-card flex flex-column">
            <h2>Club Login</h2>
            
                {/* <h2 className="">Login</h2>
                <InputText className="border-round h4 mb-4" value={studentId} placeholder="Student ID" onChange={(event) => handleChange(event.target.value)} />
                <Password className="mb-4" value={password} placeholder="Password" onChange={(event) => handlePasswordChange(event.target.value)} toggleMask />
                <Button onClick={handleSubmit} className="surface-300 border-none">Submit</Button> */}
            
            <form onSubmit={handleLogin}>
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
                    <Password
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" style={{color: 'blue'}}>Login</Button>
            </form>
            {message && <p>{message}</p>}
            </Card>
        </div>
    );
};

export default ClubLogin;/* import React, { useState } from 'react';

const ClubLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/api/club/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('clubId', data.clubId);
            onLoginSuccess(data.clubId);
        } else {
            setErrorMessage('Invalid Credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default ClubLogin; */