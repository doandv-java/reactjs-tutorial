// @ts-ignore
import femaleProfile from './images/femaleProfile.png';
// @ts-ignore
import maleProfile from './images/maleProfile.png';
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";


// @ts-ignore
const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees?.map((emp: any) => (
                                <TeamMembers emp={emp} selectedTeam={selectedTeam}
                                             handleEmployeeCardClick={handleEmployeeCardClick}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employees;