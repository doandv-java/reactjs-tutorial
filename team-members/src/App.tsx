import React, {SetStateAction, useEffect, useState} from "react";
import './App.css';
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";

const initialState = [
    {
        id: 1,
        fullName: "Bob Jones",
        designation: "Javascript Developer",
        gender: "male",
        teamName: "teamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "teamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamA"
    },
    {
        id: 4,
        fullName: "Alex",
        designation: "Node Developer",
        gender: "female",
        teamName: "teamB"
    },
    {
        id: 5,
        fullName: "Bob",
        designation: "Javascript Developer",
        gender: "male",
        teamName: "teamB"
    },
    {
        id: 6,
        fullName: "Jill",
        designation: "Node Developer",
        gender: "female",
        teamName: "teamB"
    },
    {
        id: 7,
        fullName: "Shepherd",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamC"
    },
    {
        id: 8,
        fullName: "Kai",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamC"
    },
    {
        id: 9,
        fullName: "Oriana",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamC"
    },
    {
        id: 10,
        fullName: "Dr.Jax",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamD"
    },
    {
        id: 11,
        fullName: "Dr.Swain",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamD"
    },
    {
        id: 12,
        fullName: "Lee shin",
        designation: "Java Developer",
        gender: "male",
        teamName: "teamD"
    }
]

function App() {
    // @ts-ignore
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || initialState);
    // @ts-ignore
    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "teamA");
    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees])

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam])

    function handleTeamSelectionChange(event: { target: { value: SetStateAction<string>; }; }) {
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event: { currentTarget: { id: string; }; }) {
        const transformedEmployees = employees.map((emp: any) => emp.id === parseInt(event.currentTarget.id)
            ? (emp.teamName === selectedTeam) ? {...emp, teamName: ""} : {...emp, teamName: selectedTeam} : emp);
        setEmployees(transformedEmployees);
    }

    return (

        <Router>
            <Nav/>
            <Header
                selectedTeam={selectedTeam}
                teamMemberCount={employees.filter((emp: any) => emp.teamName === selectedTeam).length}
            />
            <Routes>
                <Route path="/" element={<Employees
                    employees={employees}
                    selectedTeam={selectedTeam}
                    handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                />}/>
                <Route path="/team" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam}
                                                                 setTeam={setTeam}/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
