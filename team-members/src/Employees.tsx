import {useState} from "react";
// @ts-ignore
import femaleProfile from './images/femaleProfile.png';

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
const Employees = () => {
    const [employees, setEmployees] = useState(initialState);

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    {
                        employees.map((emp) => (
                            <div key={emp.id} className="card">
                                <img src={femaleProfile} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Full name: {emp.fullName}</h5>
                                    <p className="card-text">Designation: {emp.designation}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
export default Employees;