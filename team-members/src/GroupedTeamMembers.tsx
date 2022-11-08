import {useState} from "react";
// @ts-ignore
const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
    const [groupedEmployees, setGroupData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        let teams = []
        let teamAMembers = employees.filter((emp: any) => emp.teamName === 'teamA');
        let teamA = {team: 'teamA', members: teamAMembers, collapsed: selectedTeam !== 'teamA'}
        teams.push(teamA);

        let teamBMembers = employees.filter((emp: any) => emp.teamName === 'teamB');
        let teamB = {team: 'teamB', members: teamBMembers, collapsed: selectedTeam !== 'teamB'}
        teams.push(teamB);

        let teamCMembers = employees.filter((emp: any) => emp.teamName === 'teamC');
        let teamC = {team: 'teamC', members: teamCMembers, collapsed: selectedTeam !== 'teamC'}
        teams.push(teamC);
        return teams;
    }

    // @ts-ignore
    function handleTeamClick(event) {
        let transformedGroupData = groupedEmployees.map((groupData) => groupData.team === event.currentTarget.id
            ? {...groupData, collapsed: !groupData.collapsed} : groupData);
        setGroupData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card-mt-2" style={{cursor: 'pointer'}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white"
                                onClick={handleTeamClick}>
                                Team Name:{item.team}
                            </h4>
                            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                                <hr/>
                                {
                                    item.members.map((m: any) => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {m.fullName}</span>
                                                </h5>
                                                <p>Designation: {m.designation}</p>
                                            </div>
                                        );
                                    })
                                }

                            </div>

                        </div>
                    );
                })
            }
        </main>
    )
}
export default GroupedTeamMembers;