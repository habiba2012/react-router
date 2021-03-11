import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import './TeamDetails.css';
import maleImg from '../../assets/images/male.png';
import femaleImg from '../../assets/images/female.png';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TeamDetails = () => {
    const {teamId} = useParams()
    const [teamDetails, setTeamDetails] = useState([])
    const history = useHistory();
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[teamId])

    const backBtn = () => {
       history.push('/home')
    }
    return (
        <div className="details-container">
            <div className="details-banner">
            <img src={teamDetails.strTeamBanner} alt="banner"/>
            <img className="logo-team" src={teamDetails.strTeamLogo} alt="logo"/>
            </div>
            <div className="details-overlay"></div>
           <div className="details-info">
          
                <div className='details-text'>
                <h1>{teamDetails.strTeam}</h1>
                <p><i className="fas fa-map-marker-alt"></i> Founded : {teamDetails.intFormedYear}</p>
                <p><i className="fas fa-flag"></i> Country : {teamDetails.strCountry}</p>  
                <p><i className="far fa-futbol"></i> Sport type : {teamDetails.strSport}</p>
                <p><i className="fas fa-mars"></i> Gender : {teamDetails.strGender}</p>
                </div>
                {
                teamDetails.strGender == 'Male'? <img className="maleImg" src={maleImg} /> : <img className="femaleImg" src={femaleImg}/>
                }
               
           </div>
           <p className="details-description">{teamDetails.strDescriptionEN} {teamDetails.strCountry}</p>

            <button className="btn-style" onClick={backBtn}><i className="fas fa-arrow-left"></i> Back</button>
            <div className='team-social-icon'>
                <ul>
                    <li><a href={`https://${teamDetails.strTwitter}`}target="_blank"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faTwitter} /></a></li>
                    <li><a href={`https://${teamDetails.strFacebook}`} target="_blank"><FontAwesomeIcon style={{fontSize:'30px'}}  icon={faFacebook} /></a></li>
                    <li><a href={`https://${teamDetails.strYoutube}`} target="_blank"><FontAwesomeIcon style={{color:'red', fontSize:'30px'}} icon={faYoutube} /></a></li>
                </ul>
            
            </div>
        </div>
    );
};

export default TeamDetails;