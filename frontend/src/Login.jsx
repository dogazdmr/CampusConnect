import { InputText } from 'primereact/inputtext';
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

    /* constructor(props) {
        super(props);

        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
    } */

    return (
        <div className="center-container grid p-fluid">
        <p>user login username: 1234 <br/>club login: 4321 <br/> password empty</p>
            <Card className="center-card flex flex-column">
                <h2 className="">Login</h2>
                <InputText className="border-round h4 mb-4" value={studentId} placeholder="Student ID" onChange={(event) => handleChange(event.target.value)} />
                <Password className="mb-4" value={password} placeholder="Password" onChange={(event) => handlePasswordChange(event.target.value)} toggleMask />
                <Button onClick={handleSubmit} className="surface-300 border-none">Submit</Button>
                <Outlet />
            </Card>
        </div>
    );
}