// @ts-ignore
import maleProfile from "./images/maleProfile.png";
// @ts-ignore
import femaleProfile from "./images/femaleProfile.png";

// @ts-ignore
const TeamMembers = ({emp, selectedTeam, handleEmployeeCardClick}) => {
    return (
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
    );

}
export default TeamMembers;