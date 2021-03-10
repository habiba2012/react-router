import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import { GridList } from '@material-ui/core';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then (data => setTeams(data.teams))
        .catch (error => console.log(error))
    },[] )

    return (
        <div >
             <div className='cover-img'>
                <h1>English premium League</h1> 
            </div>
            {
                teams.map((team,idx) => <Teams className="container-home" key={idx} team={team}></Teams>)
            }
        </div>
    );
};

export default Home;