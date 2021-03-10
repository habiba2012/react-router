import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import './TeamDetails.css';
import maleImg from '../../assets/images/male.png';
import femaleImg from '../../assets/images/female.png';


const TeamDetails = () => {
    const {teamId} = useParams()
    const [teamDetails, setTeamDetails] = useState([])
    const history = useHistory();
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[])

    const backBtn = () => {
       history.push('/home')
    }
    return (
        <div>
            <img src={teamDetails.strTeamBanner} alt="banner"/>
            <h1>{teamDetails.strTeam}</h1>
            <h3>details {teamId}</h3>
            <p>Founded year{teamDetails.intFormedYear}</p>
            <p>{teamDetails.strDescriptionEN} {teamDetails.strCountry}</p>
            <p>{teamDetails.strSport}</p>
            <p>{teamDetails.strGender}</p>
            {
            teamDetails.strGender=== 'Male '? <img src={maleImg}/>:<img src={femaleImg}/>
            }
            <button className="btn-style" onClick={backBtn}>Back</button>
        </div>
    );
};

export default TeamDetails;