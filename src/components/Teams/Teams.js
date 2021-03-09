import React from 'react';
import { useHistory } from 'react-router-dom';

const Teams = (props) => {
    console.log(props.team)
    const {idTeam, strCountry, strLeague, strTeamBadge, strSport} = props.team;
    const history = useHistory();

    const  handleClick = (teamId) =>{
        const url = `/team/${teamId}`
        history.push(url);
    }
  

 return (
        <div style={{display:'grid', margin:'20px', padding:'20px', border:'1px solid red', width:'300px'}}>
            <img width='150px' src={strTeamBadge} alt="" />
            <p><strong>Sports type</strong> {strSport}</p>
            <h3>Country {strCountry}</h3>
            <p>{strLeague}</p>
            <button onClick={() => handleClick(idTeam)}>Explore</button>
            
        </div>
    );
};

export default Teams;