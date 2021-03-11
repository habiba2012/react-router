import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then (data => setTeams(data.teams))
        .catch (error => console.log(error))
    },[] )
    const bannerCss ={

    }
    return (
        <div  className='container-home'>
             <div className='cover-img'>
                <h1>English premium League</h1> 
            </div>
            <div className='container-team'>
            {
                teams.map((team,idx) => <Teams className='container-home' key={idx} team={team}></Teams>)
            }
            </div>
            
        </div>
    );
};

export default Home;