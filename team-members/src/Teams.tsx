// @ts-ignore
const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return (
        <select className="form-select form-select-lg" value={selectedTeam}
                onChange={handleTeamSelectionChange}>
            <option value="teamA">Team A</option>
            <option value="teamB">Team B</option>
            <option value="teamC">Team C</option>
            <option value="teamD">Team D</option>
        </select>
    )
}
export default Teams;