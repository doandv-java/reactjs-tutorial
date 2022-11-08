// @ts-ignore
import femaleProfile from './images/femaleProfile.png';
// @ts-ignore
import maleProfile from './images/maleProfile.png';


// @ts-ignore
const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <select className="form-select form-select-lg" value={selectedTeam}
                            onChange={handleTeamSelectionChange}>
                        <option value="teamA">Team A</option>
                        <option value="teamB">Team B</option>
                        <option value="teamC">Team C</option>
                        <option value="teamD">Team D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees?.map((emp: any) => (
                                <div key={emp.id}
                                     className={emp.teamName === selectedTeam ? "card m-2 standout" : 'card m-2'}
                                     style={{cursor: "pointer"}}
                                     onClick={handleEmployeeCardClick}>

                                    {(emp.gender === 'male') ? <img src={maleProfile} className="card-img-top"/>
                                        : <img src={femaleProfile} className="card-img-top"/>
                                    }


                                    <div className="card-body">
                                        <h5 className="card-title"><b>Full name: {emp.fullName}</b></h5>
                                        <p className="card-text"><b>Designation</b>: {emp.designation}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employees;